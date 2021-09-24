import Vue from "vue";
import vuetify from '../plugins/vuetify';
import notify from './notifyPlugin/index';

const option = {
	iconColor: 'red',
};

Vue.use(notify, vuetify, option);