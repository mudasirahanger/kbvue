<template>
  <f7-page >
    <f7-navbar v-bind:title=" $f7route.hash " back-link="Back" color="black"></f7-navbar>
    <f7-block>product page  </f7-block>
    <f7-block-title>This is product id : {{$f7route.params.pathId}}  </f7-block-title>

      <f7-list media-list v-for="product in products.slice(0,2)" :key="product.product_id">
          <f7-list-item
          v-bind:link="'/product/'+product.product_id"
          v-bind:title="product.name"
          v-bind:after="product.price"
          v-bind:text="product.description"
          >
            <img slot="media"  v-bind:src="product.thumb" width="80" />
          </f7-list-item>
 
    </f7-list>



    <div class="card demo-card-header-pic">
  <div style="background-image:url(...)" valign="bottom" class="card-header color-white no-border">Journey To Mountains</div>
  <div class="card-content">
    <div class="card-content-inner">
      <p class="color-gray">Posted on January 21, 2015</p>
      <p>Quisque eget vestibulum nulla...</p>
    </div>
  </div>
  <div class="card-footer">
    <a href="#" class="link">Like</a>
    <a href="#" class="link">Read more</a>
  </div>
</div>

   <!-- <f7-button big @click="getPostsViaREST" color="green">Load more..</f7-button> -->

   <f7-button big color="green">Load more..</f7-button>
   
  </f7-page>
</template>

<script>
import axios from 'axios';
export default {
   data: function () {
    return {
      id:this.$f7route.params.pathId,
      products: {}
    }
  },
   created(){
          axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProductDetials&product_id='+this.id).then(response => {this.products = response.data})
          
        },
        
}
</script>