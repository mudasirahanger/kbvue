<template >
  <f7-page>
    <f7-navbar title="Dry fruits" back-link="Back"></f7-navbar>
    <f7-block-title>Dry Fruits</f7-block-title>
    		
   <f7-list media-list  v-for="product in products">
		  <f7-list-item
		    link="#"
		    v-bind:title= " product.name "
		    v-bind:after="product.price "
		    subtitle="Beatles"
		    v-bind:text="product.description"
		  >
		    <img slot="media" v-bind:src=" product.thumb" width="80" />
		  </f7-list-item>
		  
</f7-list>
  	
     <f7-button round click="getPostsViaREST">PULL DATA</f7-button>
   



  </f7-page>
</template>

<script>

export default {	
        
    data(){
        return{
          products: [{
            "id":"1",
          "name":"Koshur Dried Apricot (Khurmani) 5 kg",
          "thumb" : "https://www.kashmirbox.com/image/cache/catalog/Kb_Images/healthy_living/exotic_foods/dryfruits/almond-kernels-(4)-270x270.jpg",
          "thumb_hover":"https://www.kashmirbox.com/image/cache/catalog/Kb_Images/healthy_living/exotic_foods/dryfruits/KB1991(6)-500x500.jpg",
          "price":"660:666",
          "description":"Apricots are the colorfu.."
          }
          ],  
       methods: {
          getPostsViaREST: function() {
            axios.get("https://www.kashmirbox.com/index.php?route=feed/product/getProducts")
              .then(response => {this.products = response.data});              
          }         
        },


       
      }
  }  
}


	

</script>