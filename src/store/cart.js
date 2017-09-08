import Vue from 'vue'
import { MessageBox } from 'mint-ui/';
export const CART_INSERT = 'CART_INSERT';
export const CART_REMOVER = 'CART_REMOVER';
export const CART_CLEARALL = 'CART_CLEARALL';
export const CART_ADDRESS = 'CART_ADDRESS';
export const CART_BUSINESS = 'CART_BUSINESS';
export const CART_ORDER = 'CART_ORDER';
export const GO_PAY = 'GO_PAY';
export const MORE_ORDER = 'MORE_ORDER';
export const SUB_ORDERGOODS = 'SUB_ORDERGOODS';
export const CART_SHOPADDRESS = 'CART_SHOPADDRESS'


export default {
	state: JSON.parse(localStorage.getItem('cartData') || '{"items":[],"total":0,"count":0,"address":{},"business":{}}'),
	mutations: {
		[CART_INSERT] (state, goodsData) {
			const cart = state;
			var repeat = false;//是否与购物车重复
			cart.total = 0; //总数量
			cart.count = 0; //  总价格
			for (var i = 0; i < cart.items.length; i++) {
				if (cart.items[i].id != goodsData.id) {//1.不是同一类商品 -----判断库存 ----库存大于0情况下
					continue;
				} else {
					if (cart.items[i].nums < goodsData.qty) {//2.购物车数量  小于 库存  才能加入购物车
						cart.items[i].nums++;
					} else {

					}

					repeat = true
				}
			}

			if (!repeat) {
				if (goodsData.qty) {//1.添加的商品库存大于0的情况下添加到购物车  否则不进行操作
					goodsData.nums = goodsData.nums || 1;
					cart.items.push(goodsData);
				}
			}

			//计算商品数量 数量  和商品总价
			cart.items.map(function (goods) {
				goods.subTotal = goods.nums * goods.netPrice;
				cart.count += goods.nums;
				cart.total += goods.nums * goods.netPrice;
			});
			cart.count = parseFloat(cart.count.toFixed(2));
			cart.total = parseFloat(cart.total.toFixed(2));


			Object.assign(state, cart);
			localStorage.setItem('cartData', JSON.stringify(cart));


		},
		[CART_REMOVER] (state, goodsData) {
			const cart = state;
			cart.total = 0;
			cart.count = 0;
			if (goodsData) {
				for (var i = 0; i < cart.items.length; i++) {
					if (cart.items[i].id != goodsData.id) {
						continue;
					} else {
						cart.items[i].nums--;

						if (cart.items[i].nums == 0) {

							cart.items.splice(i, 1);
						}
					}
				}

				cart.items.map(function (goods) {
					goods.subTotal = goods.nums * goods.netPrice;
					cart.count += goods.nums;
					cart.total += goods.nums * goods.netPrice;
				});

				cart.count = parseFloat(cart.count.toFixed(2));
				cart.total = parseFloat(cart.total.toFixed(2));
			} else {
				cart.items = [];
			}

			Object.assign(state, cart);
			localStorage.setItem('cartData', JSON.stringify(cart));

		},
		// 清除购物车
		[CART_CLEARALL] (state, goodsData) {
			const cart = state;
			for(var i=0;i<cart.items.length;i++){
				cart.items[i].nums = 0;
			}
			cart.items = [];
			cart.count = 0;
			cart.total = 0;
			Object.assign(state, cart);
			localStorage.setItem('cartData', JSON.stringify(cart));
		},
		[CART_SHOPADDRESS] (state, address) {
			var data = address;
			const cart = state;
			if (!data.data) {
				cart.business = {
					distance: 0,
					id: null,
					tel: 0
				};
				cart.address = {
					address: data.address,
					city: data.cityName
				}
			} else {
				var data = data.data;
				cart.business = {//商戶的信息
					id: data.id ? data.id : '',
					name: data.name ? data.name : '',
					userId: data.userId ? data.userId : '',
					tel: data.tel ? data.tel : '',
					areaId: data.areaId ? data.areaId : '',
					selfDelivery: data.selfDelivery ? data.selfDelivery : '',
					deliveryRange: data.deliveryRange ? data.deliveryRange : '',
					businessCode: data.code ? data.code : '',
					distance: data.distance ? data.distance : '',
					startDeliveryAmount: data.startDeliveryAmount ? data.startDeliveryAmount : '',
					startDeliveryFee: data.startDeliveryFee ? data.startDeliveryFee : '',
					deliveryFeeFreeAmount: data.deliveryFeeFreeAmount ? data.deliveryFeeFreeAmount : '',
					address: data.address ? data.address : '',
					longitude: data.longitude ? data.longitude : '',
					latitude: data.latitude ? data.latitude : ''
				}
				cart.address = data.userAddress; //用戶的信息
			}
			Object.assign(state, cart);
			localStorage.setItem('cartData', JSON.stringify(state));
		},
		//商铺id获取---
		[CART_ADDRESS] (state, address) {
			var token = localStorage.getItem('token');
			const cart = state;			

		},
		// 提交订单的商品
		[SUB_ORDERGOODS] (state, goods) {
			const cart = state;
			var len = goods.length;
			var i = 0;
			var foods = "[";
			goods.forEach(function (e) {
				i++;
				var o = {};
				o["id"] = e.id;
				o["qty"] = e.nums;
				foods += JSON.stringify(o);
				if (i != len) {
					foods += ",";
				}
			})
			foods += "]";
			cart.goods = foods;
			Object.assign(state, cart);
			localStorage.setItem('cartData', JSON.stringify(cart));
		},
		//订单保存
		[CART_ORDER] (state, order) {
			const cart = state;
			cart.order = order;
			Object.assign(state, cart);
			localStorage.setItem('cartData', JSON.stringify(cart));

		},
		//
		[GO_PAY] (state, paramData) {
			const cart = state;
			var token = localStorage.getItem('token');
			var $router = paramData.$router;
			var orderId = paramData.orderOX;
			var UrlRouter = paramData.index;
		},
		//再来一单
		[MORE_ORDER] (state, goodsData) {
			var cart = state;
			var items = goodsData.data;
			var arr = [];
			var total = 0;
			var count = 0;
			for (var i = 0; i < items.length; i++) {
				if ((items[i].storageQty - items[i].buyQty) >= 0) {
					items[i].id = items[i].goodsId;
					items[i].nums = items[i].buyQty;
					count += items[i].buyQty;
					total += items[i].buyQty * items[i].netPrice;
					arr.push(items[i])
				}
			}
			cart.items = arr;
			cart.count = count;
			cart.total = total;

			Object.assign(state, cart);
			localStorage.setItem('cartData', JSON.stringify(cart));
		}
	},
	actions: {
		[CART_INSERT] ({ commit }, goodsData) {
			commit('CART_INSERT', goodsData)
		},
		[CART_REMOVER] ({ commit }, goodsData) {
			commit('CART_REMOVER', goodsData)
		},
		[CART_CLEARALL] ({ commit }, goodsData) {
			commit('CART_CLEARALL', goodsData)
		},
		[CART_ADDRESS] ({ commit }, address) {
			commit('CART_ADDRESS', address)
		},
		[CART_SHOPADDRESS] ({ commit }, address) {
			commit('CART_SHOPADDRESS', address)
		},
		[CART_ORDER] ({ commit }, order) {
			commit('CART_ORDER', order)
		},
		[GO_PAY] ({ commit }, pay) {
			commit('GO_PAY', pay)
		},
		[MORE_ORDER] ({ commit }, goodsData) {
			commit('MORE_ORDER', goodsData)
		},
		[SUB_ORDERGOODS] ({ commit }, goods) {
			commit('SUB_ORDERGOODS', goods)
		},
	}
}
