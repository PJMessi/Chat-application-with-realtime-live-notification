require('./bootstrap');

window.Vue = require('vue');

// components
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('master-component', require('./components/Master.vue').default);
Vue.component('passport-clients', require('./components/passport/Clients.vue').default);
Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);
Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);


//moment js
import moment from 'moment';
Vue.filter('message_time', function (value) {
    return moment(value, "YYYYMMDD").fromNow();
})

const app = new Vue({
    el: '#app',
});
