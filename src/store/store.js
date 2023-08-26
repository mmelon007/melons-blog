import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLogin: false,
    users: [
      {
        userId: "zvalley",
        pass: "000157",
      },
    ],
    newsListKey: ["news01", "news02"],
    news01: [
      {
        newsID: 1,
        content: "news1111",
        checked: false,
      },
      {
        newsID: 2,
        content: "news222",
        checked: false,
      },
      {
        newsID: 3,
        content: "news333",
        checked: false,
      },
    ],
    news02: [
      {
        newsID: 1,
        content: "02news1111",
        checked: false,
      },
      {
        newsID: 2,
        content: "02news222",
        checked: false,
      },
      {
        newsID: 3,
        content: "02news333",
        checked: false,
      },
    ],
  },
  getters: {
    getNews1: (state) => {
      return state.news01;
    },
    getNews2: (state) => {
      return state.news02;
    },
    getLoginState: (state) => {
      return state.isLogin;
    },
  },
  mutations: {
    loginValidate: (state, data) => {
      for (let user in state.users) {
        if (state.users[user].userId === data.userId && state.users[user].pass === data.pass) {
          state.isLogin = true;
          break;
        }
      }
    },
    checkNews:(state, data) => {
        let listName = data.listName;
        let newsId = data.newsId;
        console.log('list: '+ listName + ' id : '+ newsId + ' is checked!');
        let arr = state[listName];
        for(let i = 0; i < arr.length; ++ i){
            if(arr[i].newsID === Number(newsId)){
                arr[i].checked = true;
                break;
            }
        }
    }
  },
});
