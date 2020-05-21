<template>
  <div>
    <div v-for="post in postResponse" :key="post.id">
      <h4> <router-link :to="'/post/' + post.id"> {{post.title.rendered}} </router-link></h4>
      <div v-html="post.excerpt.rendered"></div>
      <!-- <div v-html="post.content.rendered"></div> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'PostList',
  data: function() {
    return {
      postResponse: [],
    }
  },
  mounted () {
    console.log("gunnar är bäst");

    this.$axios.get('https://wepopop.com/wp-json/wp/v2/posts')
      .then(response => {
        console.log(response.data);
        this.postResponse = response.data;
        })
      .catch(err => console.error(err));

  }
};
</script>

<style scoped lang="scss">
.min-rubrik-styling {
  font-size: 20rem;
}

</style>

