<template>
  <div>

<!--
Bruno testar ett q-card

testa att använda flexbox för att får responsiv placering av bilderna
-->
    <q-card class="blogg-mini-card">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        basic
      >
        <div class="absolute-bottom text-h6">
          Title
        </div>
      </q-img>

      <q-card-section>
        Brödtext
      </q-card-section>
    </q-card>

    <q-card class="blogg-mini-card" v-for="post in postResponse" :key="post.id"><!-- <Java script loop> -->
      <q-img class="bloggominibild" v-if="post._embedded['wp:featuredmedia']"
        :src="post._embedded['wp:featuredmedia'][0].source_url"
        basic
      > </q-img>
      <h4> <router-link :to="'/post/' + post.id"> {{post.title.rendered}} </router-link></h4>
      <div v-html="post.excerpt.rendered"></div>
      <!-- <div v-html="post.content.rendered"></div> -->
    </q-card>

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

    let mittObject = {
      'value1': 123,
      'value2': 456,
      'wp:recive': {
        cooltext: "text"
        }
    }

    mittObject['wp:recive'].cooltext


    this.$axios.get('https://wepopop.com/wp-json/wp/v2/posts?_embed') //Här här hämtas alla poster, verkar bara hämta 10st//
      .then(response => {
        console.log(response.data);//Här logas alla data console.log(response); ger allt .data ger bara det i data//
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

.blogg-mini-card{
  max-width: 25rem;
  
  .bloggominibild{
    max-height: 20rem;
  }
  
}

</style>

