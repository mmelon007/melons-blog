import home from './view/home.vue'
import login from './view/login.vue'

export default [
    {path: "/", component: login},
    {path: "/home/:userId", component: home},
];