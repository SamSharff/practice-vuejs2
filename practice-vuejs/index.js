/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Sam!",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoaaa";
    },
  },
};

Vue.createApp(App).mount("#app");
