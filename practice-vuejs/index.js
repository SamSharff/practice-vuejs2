/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      name: "Sam!",
      chocolates: ["dark", "darker", "darkest"],
      newChocolate: "",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Whoaaa";
    },
    addChocolate: function () {
      this.chocolates.push(this.newChocolate);
      this.newChocolate = "";
    },
  },
};

Vue.createApp(App).mount("#app");
