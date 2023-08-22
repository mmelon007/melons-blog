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
  },
  getters: {
    getAllBlogs: (state) => {
      return state.blogs;
    },
    getBlogsByCategoryName: (state) => (categoryName) => {
      let categoryId = state.categories[categoryName];
      return state.blogs.filter(blog => blog.category === categoryId);
    },
  },
  mutations: {},
});
