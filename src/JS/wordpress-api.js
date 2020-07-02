import axios from 'axios'

export async function getPosts(type){
  try{
    const response = await axios.get('https://wepopop.com/wp-json/wp/v2/posts?_embed&per_page=20&categories=' + type) //Här här hämtas alla poster, verkar bara hämta 10st//
    return response.data;
    console.log(type);
  }catch(err){
    console.error(err);
  }
}



//Fortsätt här skapa ett js objekt som lagrar categori-id och namn och slug
let categories = {}

export async function getCategories(){
const response = await axios.get('https://wepopop.com/wp-json/wp/v2/categories?per_page=100')
return response;
}


export default {getPosts}; //Exporteras på två olika sätt för att importeras på olika sätt den här används om man vill skriva ex. wordpress-api.GetPosts när man har många funktioner i smma

