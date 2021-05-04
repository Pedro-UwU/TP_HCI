import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Explore from "./views/Explore";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
// import Routines from "./views/Routines";
import Favorites from "./views/Favorites";
import Profile from "./views/Profile";
import Register from "./views/Register";
import CreateRoutine from "@/views/CreateRoutine";
import MyCreations from "./views/MyCreations";

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path:'/' , component: Explore },
    { path:'/login', component: Login},
    { path:'/my-creations', component: MyCreations},
    { path:'/favorites', component: Favorites},
    { path:'/profile', component: Profile},
    { path: '/register', component: Register},
    { path: '/create', component: CreateRoutine},
    { path: '*', component: NotFound }
  ]
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
