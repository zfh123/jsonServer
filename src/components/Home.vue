<template>
	<div class="home">
		<div class="tab-top">
			<ul class="tab-ul">
				<!-- <li class="active">展昭</li>
							    <li>王朝</li>
							    <li>马汉</li>
							    <li>张龙</li>
							    <li>赵虎</li> -->
			</ul>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">1</div>
				<div class="swiper-slide">2</div>
				<div class="swiper-slide">3</div>
				<div class="swiper-slide">4</div>
				<div class="swiper-slide">5</div>
			</div>
		</div>
	</div>
</template>

<script>
/*webpack可以使用require和export ，
 * 但是不能混合使用import 和module.exports ，
 * 不然会报错Cannot assign to read only property 'exports' of object '#*/
import axios from 'axios'
import * as API from '@/constants/api'
export default {

	name: 'Home',
	data () {
		return {

		}
	},
	created(){
		console.log(API)
	},
	mounted () {
		this.swiper();
		this.getAxoi();
		Ajox('',function(data){
			console.log(data)
		});
	},
	computed () {

	},
	methods: {
		getAxoi () {
			axios({
				url: API.news,
				method: 'get',
				params: {
					id: 1
				}
			}).then(function (response) {
				console.log(response)
			}).catch(function (err) {

			})
		},
		getData () {
			var xmr = new XMLHttpRequest();
			xmr.onreadystatechange = function () {
				if (xmr.readyState == 4 && xmr.status == 200) {
					var name = JSON.parse(xmr.responseText);
					console.log(name);
				}
			}
			xmr.open("GET", "http://localhost:3000/news", true);
			xmr.send();
		},
		swiper: function () {
			var mySwiper;
			$(".tab-ul li").click(function () {
				$(this).addClass('active').siblings().removeClass('active');
				mySwiper.slideTo($(this).index())
			})
			/*滑动*/
			mySwiper = new Swiper('.swiper-container', {

				onSlideChangeStart: function (swiper) {
					var num = swiper.activeIndex;
					if (num == 5) {
						num = 0;
					}
					$(".tab-ul li").removeClass("active");
					$(".tab-ul li").eq(num).addClass("active");
				}
			});
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../static/css/swiper.min.css';
.tab-top {
	height: 50px;
	line-height: 50px;
	background: #ffffff;
}

.tab-top ul {
	width: 100%;
	height: 100%;
	display: flex;
	display: -webkit-flex;
	display: -moz-flex;
}

.tab-top ul li {
	-webkit-flex: 1;
	flex: 1;
	text-align: center;
}

.active {
	border-bottom: 2px solid blue;
}

.swiper-container {
	width: 100%;
	height: 300px;
}
</style>
