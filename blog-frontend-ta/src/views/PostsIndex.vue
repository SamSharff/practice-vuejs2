<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome!",
      posts: [],
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts.json").then((response) => {
        this.posts = response.data;
        console.log("All Posts:", this.posts);
      });
    },
  },
};
</script>

<template>
  <div v-for="post in posts" v-bind:key="post.id">
    <h1>{{ post.title }}</h1>
    <img :src="post.image" alt="TASTY FOODS" />
    <p>
      {{ post.body }}
    </p>
  </div>
</template>
