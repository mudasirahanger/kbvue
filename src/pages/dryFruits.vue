<template>
  <f7-page >
    <f7-navbar title="DryFruits" back-link="Back" color="black"></f7-navbar>
    <f7-block-title>This is DryFruits Page {{ $f7route.query.id }}</f7-block-title>
    
     <f7-list media-list v-for="product in products" :key="product.product_id">
          <f7-list-item
            link="#"
            v-bind:title="product.id"
            v-bind:after="product.price"
            subtitle="Ratings : 15"
            v-bind:text="product.description"
          >
            <img slot="media"  v-bind:src=" product.thumb" width="80" />
          </f7-list-item>
 
    </f7-list>
  <!-- <f7-button big @click="getPostsViaREST" color="green">Load more..</f7-button>-->
   
  </f7-page>
</template>
<script>
import axios from 'axios';
import vueResource from 'vue-resource';

import Vue from 'vue';
 window.Vue = Vue;
export default {
   data: function () {
    return {
      id:this.$f7route.params.id,
      products:{}
    }
  },
     created(){
          this.$http.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&path='+this.id).then(function(data){
            console.log(data);
            this.products=data.body;

          });
        }
      }
  

</script>