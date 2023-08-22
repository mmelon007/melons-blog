import home from './view/home.vue'
import blogs from './view/blogs.vue'
import contact from './view/contact.vue'

export default [
    {path: "/", component: home},
    {path: "/contact", component: contact},
    {path: "/blogs", component: blogs}
];