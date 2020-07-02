<template>
  <div id="blog-box-container">
<!--


-->
    <template v-for="(post, index) in postResponse">
      <q-card class="blogg-mini-card" v-bind:key="post.id">
        <router-link :to="'/post/' + post.id" ><!-- <Java script loop> -->
        
          <q-img class="bloggminibild" v-if="post._embedded['wp:featuredmedia']"
            :src="post._embedded['wp:featuredmedia'][0].source_url"
            basic>
            <div class="absolute-bottom text-h6">
              <!-- {{ post.title.rendered }} -->
              <span v-html="post.title.rendered">  </span><!--Möjligen en säkerhetsrisk med v-html då man kan få den att läsa ett script-->
            </div>
          </q-img>
        
          <q-card-section class="blog-abstract" v-html="condensedAbstracts[index]"></q-card-section> <!--Möjligen en säkerhetsrisk med v-html då man kan få den att läsa ett script-->
          <!-- <div v-html="post.content.rendered"></div> -->
        </router-link>
      </q-card>
    </template>

  </div>
</template>

<script>
import {getPosts,getCategories} from 'src/JS/wordpress-api' //Här kan vi importera från vår .js fil
export default {
  name: 'PostList',
  data: function() {
    return {
      postResponse: [],
    }
  },
  computed: {
    condensedAbstracts () {
      return this.postResponse.map(post => { //.map funktion som går igenom array
        let abstract = post.excerpt.rendered;
        // abstract = abstract.substr(0, 100);// Antal tecken
        
         abstract= abstract.split(" ").splice(0,15).join(" ");
         abstract += '...'; //avslutas med ...
         return abstract;
      })
    }
  },
  async created() {
    console.log("gunnar är bäst");
    this.postResponse = await getPosts('1'); //Hämtar posts när de kommer kallas för promise data när den kommer
    let categories = await getCategories()
  console.log(categories);
  }
};
</script>

<style scoped lang="scss">
.min-rubrik-styling {
  font-size: 20rem;
}

.blogg-mini-card{
  //height:100%;
  //max-width: 25rem;
  
  
  .bloggminibild{
    height: 20rem;
    border-radius: 0.15rem 0.15rem 0 0; //rundade hörn övre hörnen på bilden
  }
  
}

#blog-box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
  margin: 2rem;
  align-items: stretch;
}
.blog-abstract {
  color:black;
  text-decoration: none;

  //  overflow: hidden;
  //  text-overflow: ellipsis;
  //  display: -webkit-box;
  //  -webkit-line-clamp: 3,5; /* number of lines to show */
  //  -webkit-box-orient: vertical;
  
}

a {
  text-decoration: none;
}

// .box {
//   background-color: #20262e;
//   color: #fff;
//   border-radius: 3px;
//   padding: 20px;
//   font-size: 14px;
// }

</style>

