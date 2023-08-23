import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    blogs: [
      {
        id: 1,
        title: "Bad Design vs. Good Design: 5 Examples We can Learn From",
        date: "September 24.2020",
        tags: ["#HCI"],
        category: 2,
      },
      {
        id: 2,
        title: "User Interface Design Guidelines: 10 Rules of Thumb",
        date: "April 03.2020",
        tags: ["#Design Thinking"],
        category: 1,
      },
      {
        id: 3,
        title: "The 7 Factors that Influence User Experience",
        date: "January 29.2020",
        tags: [
          "#HCI",
          "#Usability",
          "#Design Thinking",
          "asasasdwef",
          "dsadageqw",
        ],
        category: 3,
      },
      {
        id: 4,
        title: "Usability: A part of the User Experience ",
        date: "September 14.2019",
        tags: ["#HCI", "#Usability"],
        category: 2,
      },
      {
        id: 5,
        title: "5Bad Design vs. Good Design: 5 Examples We can Learn From",
        date: "September 24.2020",
        tags: ["#HCI"],
        category: 1,
      },
      {
        id: 6,
        title: "6User Interface Design Guidelines: 10 Rules of Thumb",
        date: "April 03.2020",
        tags: ["#Design Thinking"],
        category: 3,
      },
      {
        id: 7,
        title: "7The 7 Factors that Influence User Experience",
        date: "January 29.2020",
        tags: [
          "#HCI",
          "#Usability",
          "#Design Thinking",
          "asasasdwef",
          "dsadageqw",
        ],
        category: 2,
      },
      {
        id: 8,
        title: "8Usability: A part of the User Experience ",
        date: "September 14.2019",
        tags: ["#HCI", "#Usability"],
        category: 1,
      },
      {
        id: 9,
        title: "9Bad Design vs. Good Design: 5 Examples We can Learn From",
        date: "September 24.2020",
        tags: ["#HCI"],
        category: 3,
      },
      {
        id: 10,
        title: "10User Interface Design Guidelines: 10 Rules of Thumb",
        date: "April 03.2020",
        tags: ["#Design Thinking"],
        category: 2,
      },
      {
        id: 11,
        title: "11The 7 Factors that Influence User Experience",
        date: "January 29.2020",
        tags: [
          "#HCI",
          "#Usability",
          "#Design Thinking",
          "asasasdwef",
          "dsadageqw",
        ],
        category: 1,
      },
      {
        id: 12,
        title: "12Usability: A part of the User Experience ",
        date: "September 14.2019",
        tags: ["#HCI", "#Usability"],
        category: 2,
      },
    ],
    categories: {
      All: 0,
      "Design Theory": 1,
      Tech: 2,
      "User Interface": 3,
    },
    blogArticle: [
      {
        id: 1,
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
        userAvarta: "",
      },
      {
        userId: 2,
        userName: "Shane Hobbins",
        userAvarta: "",
      },
      {
        userId: 3,
        userName: "3 Jon Davis",
        userAvarta: "",
      },
      {
        userId: 4,
        userName: "4 Shane Hobbins",
        userAvarta: "",
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
              replyId: 2,
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
      return state.blogs.filter((blog) => blog.category === categoryId);
    },
    getBlogInfoById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id === Number(id));
    },
    getBlogArticleById: (state) => (id) => {
      return state.blogArticle.find((article) => article.id === Number(id));
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
  mutations: {},
});
