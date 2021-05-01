import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Routines from "./views/Routines";
import Favorites from "./views/Favorites";
import Profile from "./views/Profile";

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path:'/' ,name : "Home", component: Home },
    { path:'/login', component: Login},
    { path:'/routines',component: Routines},
    { path:'/favorites', component: Favorites},
    { path:'/profile', component: Profile},
    { path: '*', component: NotFound }
  ]
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
