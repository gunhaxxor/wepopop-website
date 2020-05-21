<template>
  <div> 
    <h1 class="min-rubrik-styling">WP test</h1>
    <p v-for="post in postResponse" :key="post"> {{post}}</p>
  </div>
</template>

<script>
export default {
  name: 'WpFetch',
  data: function() {
    return {
      postResponse: ['recept 1', 'recept 2', 'recept 3'],
    }
  },
  mounted () {
    console.log("gunnar är bäst");
    // fetch('https://wepopop.com/wp-json/wp/v2/posts').then((response)=>{
    //   console.log(response.body);
    //   this.postResponse = response.body;
    // })

  }
};
</script>

<style scoped lang="scss">
.min-rubrik-styling {
  font-size: 20rem;
}

</style>

