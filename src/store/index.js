import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
	const store = new Vuex.Store({
		state: {
			config :{
				title : "YOO 홈페이지",
				footer : "YOO all right reserved.",
				menu : [
					{
						title : "Home",
						icon : "mdi-home",
						to : '/',
						grant : 0, // 0 ~ 10 권한조정
						newTab : false,
						subItems : []
					},
					{
						title : "About",
						icon : "mdi-alphabetical",
						to : '/about',
						grant : 0, // 0 ~ 10 권한조정
						newTab : false,
						subItems : [
							{
								title : "Menu1",
								icon : "mdi-home",
								to : '/',
								grant : 0, // 0 ~ 10 권한조정
								newTab : false,
								subItems : [
									{
										title : "Menu1-1",
										icon : "mdi-home",
										to : '/',
										grant : 0, // 0 ~ 10 권한조정
										newTab : false,
										subItems : []
									},
									{
										title : "Menu1-2",
										icon : "mdi-home",
										to : '/',
										grant : 0, // 0 ~ 10 권한조정
										newTab : false,
										subItems : []
									},
								]
							},
							{
								title : "Menu2",
								icon : "mdi-home",
								to : '/',
								grant : 0, // 0 ~ 10 권한조정
								newTab : false,
								subItems : []
							},
							{
								title : "Menu3",
								icon : "mdi-home",
								to : '/',
								grant : 0, // 0 ~ 10 권한조정
								newTab : false,
								subItems : []
							},
						]
					},
				]
			}
		},
		mutations: {
		},
		actions: {
		},
		modules: {
		}
	});
	return store;
}