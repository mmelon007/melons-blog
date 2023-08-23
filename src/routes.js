import home from './view/home.vue'
import blogs from './view/blogs.vue'
import contact from './view/contact.vue'
import blogDetail from './view/blogDetail.vue'

export default [
    {path: "/", component: home},
    {path: "/contact", component: contact},
    {path: "/blogs", component: blogs},
    {path: "/blog/:id", component: blogDetail},
    {path: "/blogs/:searchInput", component: blogs},
];