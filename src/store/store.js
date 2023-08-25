import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    blogs: [],
    categories: {
      All: 0,
      "Design Theory": 1,
      Tech: 2,
      "User Interface": 3,
    },
    blogArticle: [
      {
        id: 1,
        img: "",
        content: `1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 2,
        img: "",
        content: `2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 3,
        img: "",
        content: `3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 4,
        img: "",
        content: `4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 5,
        img: "",
        content: `5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 6,
        img: "",
        content: `6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 7,
        img: "",
        content: `7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 8,
        img: "",
        content: `8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 9,
        img: "",
        content: `9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 10,
        img: "",
        content: `10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 11,
        img: "",
        content: `11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
      {
        id: 12,
        img: "",
        content: `12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
        Information overload
        Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
        Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. 
        'Designing For Sustainability, Tim Frick, 2014'
        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.      
        `,
      },
    ],
    users: [
      {
        userId: 1,
        userName: "Jon Davis",
        userAvarta: "@/assets/avarta/avarta.jpg",
      },
      {
        userId: 2,
        userName: "Shane Hobbins",
        userAvarta: "@/assets/avarta/avarta.jpg",
      },
      {
        userId: 3,
        userName: "3 Jon Davis",
        userAvarta: "@/assets/avarta/avarta.jpg",
      },
      {
        userId: 4,
        userName: "4 Shane Hobbins",
        userAvarta: "@/assets/avarta/avarta.jpg",
      },
    ],
    comments: [
      {
        blogId: 1,
        dialog: {
          id: 1,
          userId: 1,
          time: "2 Minutes ago",
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ",
          replys: [
            {
              userId: 2,
              content:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
              time: "Just now",
            },
          ],
        },
      },
      {
        blogId: 1,
        dialog: {
          id: 1,
          userId: 2,
          time: "2 Minutes ago",
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ",
          replys: [],
        },
      },
      {
        blogId: 2,
        dialog: {
          id: 1,
          userId: 2,
          time: "2 Minutes ago",
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. ",
          replys: [],
        },
      },
    ],
  },
  getters: {
    getAllBlogs: (state) => {
      return state.blogs;
    },
    getBlogsByCategoryName: (state) => (categoryName) => {
      let categoryId = state.categories[categoryName];
      return categoryId === 0
        ? state.blogs
        : state.blogs.filter((blog) => blog.category === categoryId);
    },
    getBlogInfoById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id === Number(id));
    },
    getBlogArticleById: (state) => (id) => {
      return state.blogArticle.find((article) => article.id === Number(id));
    },
    getBlogBySearchInput: (state) => (input) => {
      return state.blogs.filter((blog) => blog.title.includes(input));
    },
    getCommentById: (state) => (blogId) => {
      return state.comments.filter(
        (comment) => comment.blogId === Number(blogId)
      );
    },
    getUserInfoById: (state) => (userId) => {
      return state.users.find((user) => user.userId === Number(userId));
    },
  },
  mutations: {
    initialBlogsData: (state, blogs) => {
      state.blogs = blogs;
    },
  },
  actions: {
    initialBlogsData: async (context) => {
      try {
        const data = await axios.get("/api/blogs.json");
        let key = Object.keys(data.data);
        let blogs = data.data[key];
        context.commit("initialBlogsData", blogs);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
