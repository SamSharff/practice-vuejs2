<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      messageTwo: "",
    };
  },
  created: function () {},
  methods: {
    buttonToNothing: function () {
      this.messageTwo = "Heyoooooo";
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <button v-on:click="buttonToNothing()">This is a button to nothing</button>
    <input type="text" v-model="messageTwo" />
  </div>
</template>

<style></style>
