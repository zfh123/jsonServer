import Vue from 'vue'
export const USER_SIGNIN = 'USER_SIGNIN'; //登录
export const USER_SIGNOUT = 'USER_SIGNOUT'; //退出



export default {
	state: JSON.parse(localStorage.getItem('user') || 'null'),
	mutations: {
		[USER_SIGNIN](state, loginData) {
			Object.assign(state, loginData);
			localStorage.setItem('user', JSON.stringify(state));
		},
		[USER_SIGNOUT](state) {

			localStorage.removeItem('user');
			localStorage.removeItem('payparam');
			localStorage.removeItem('token');
			Object.assign(state, {});
		}
	},
	actions: {
		[USER_SIGNIN]({ commit }, loginData) {
			commit('USER_SIGNIN', loginData)
		},
		[USER_SIGNOUT]({ commit }) {
			commit('USER_SIGNOUT')
		}
	}
}
