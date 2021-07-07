import { library } from '@fortawesome/fontawesome-svg-core';
import * as AllIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { VueSpinners } from '@saeris/vue-spinners';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import './custom.scss';
import router from './router';

// importing all icons
for(const key in AllIcons){
	try {
		library.add(AllIcons[key]);
	} catch(e){
		console.log('ignore unsuccessful import');
	}
}
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueSpinners);

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');