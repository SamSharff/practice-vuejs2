/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Sam!",
    };
  },
};

Vue.createApp(App).mount("#app");
