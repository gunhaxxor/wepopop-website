<template>
  <div v-if="postData">
    <h1>{{postData.title.rendered}}</h1>
    <img v-if="imageUrl" :src="imageUrl" />
    <div v-html="postData.content.rendered"> </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      postId: null,
      postData: '',
      imageUrl: null
    }
  },
  methods: {
    fetchFeaturedMedia(id) {
      console.log("fetching featured image");
      this.$axios.get('https://wepopop.com/wp-json/wp/v2/media/' + id)
        .then(response => {
          console.log(response.data);
          this.imageUrl = response.data.source_url;
        })

    }
  },
  mounted() {
    this.postId = this.$route.params.id
    this.$axios.get('https://wepopop.com/wp-json/wp/v2/posts/' + this.postId + '?_embed')
     .then(response => {
       console.log(response.data);
       this.postData = response.data;

       if(this.postData.featured_media){
         this.fetchFeaturedMedia(this.postData.featured_media);
       }

     })
     .catch( err => console.error(err));

  }
};
</script>

<style lang="scss">
</style>