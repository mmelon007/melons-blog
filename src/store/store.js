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
    blogArticle: [],
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
    comments: [],
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
    initialBlogsData: (state, blogsData) => {
      state.blogs = blogsData.blogs;
      state.blogArticle = blogsData.blogArticles;
      state.comments = blogsData.comments;
    },
  },
  actions: {
    initialBlogsData: async (context) => {
      try {
        const blogData = await axios.get("/api/blogs.json");
        let blogKey = Object.keys(blogData.data);
        let blogs = blogData.data[blogKey];

        const blogArticleData = await axios.get("/api/blogArticle.json");
        let blogArticleKey = Object.keys(blogArticleData.data);
        let blogArticles = blogArticleData.data[blogArticleKey];

        const commentData = await axios.get("/api/comments.json");
        let commentKey = Object.keys(commentData.data);
        let comments = commentData.data[commentKey];

        let blogsData = {
          blogs: blogs,
          blogArticles: blogArticles,
          comments: comments,
        };

        context.commit("initialBlogsData", blogsData);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
