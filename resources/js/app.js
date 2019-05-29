
require('./bootstrap');

window.Vue = require('vue');

Vue.component('conversation', require('./components/Conversation.vue').default);
Vue.component('contactlist', require('./components/ContactList.vue').default);
Vue.component('topbar', require('./components/Topbar.vue').default);
Vue.component('passport-clients', require('./components/passport/Clients.vue').default);
Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue').default);
Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue').default);


//for events
window.Fire = new Vue();

//filter moment js
import moment from 'moment';
Vue.filter('message_time', function (value) {
    return moment(value, "YYYYMMDD").fromNow();
})

//sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
window.Toast = Toast;  

const app = new Vue({
    el: '#app',
});
