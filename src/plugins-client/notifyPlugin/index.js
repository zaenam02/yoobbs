import notifyInterface from './notiInterface.vue';

const defaultOptions = {
	width: 400,
	icon: "",
	iconColor: "orange",
	type: "alert",
	text : ""
};

export default {
	install(Vue, vuetify, options) {
		const Construct = Vue.extend(notifyInterface);
		const Instance = new Construct({
			vuetify : vuetify,
			data : {
				options : Object.assign(defaultOptions, options)
			}
		});
		Vue.prototype.$nextTick(()=> {
			Vue.prototype.$notify = Instance.$mount();
			document.getElementById('app').appendChild(Instance.$el);
		})
	}
}