import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Explore from "./views/Explore";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Favorites from "./views/Favorites";
import Profile from "./views/Profile";
import Register from "./views/Register";
import CreateRoutine from "@/views/CreateRoutine";
import MyExercises from "./views/MyExercises";
import MyRoutines from "./views/MyRoutines";
import SeeRoutine from "./views/SeeRoutine";
import VerificacionTemporal from "./views/VerificacionTemporal";
import VerificationSuccess from "./views/VerificationSuccess";

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path:'/', component: Explore},
    { path:'/login', component: Login},
    { path:'/favorites', component: Favorites},
    { path:'/profile', component: Profile},
    { path: '/register', component: Register},
    { path: '/create:id', component: CreateRoutine},
    { path: '/create', component: CreateRoutine},
    { path: '/my-exercises', component: MyExercises},
    { path: '/my-routines', component: MyRoutines},
    { path: '/seeRoutine:id', component: SeeRoutine},
    { path: '/verification', component: VerificacionTemporal},
    { path: '/verification-success', component: VerificationSuccess},
    { path: '*', component: NotFound}
  ]
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
