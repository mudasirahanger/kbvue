<template>
  <f7-page>
     
   <f7-navbar class=" toolbar-fixed navbar-fixed" v-bind:title=" $f7route.hash " back-link="Back" color="black">
   <f7-nav-left></f7-nav-left>
   <f7-nav-right>
    <f7-row>
      
     <f7-col>
      <f7-link icon-if-md="material:favorite_border" ></f7-link>
      </f7-col>
      <f7-col>
          <f7-link icon-if-ios="f7:shopping_cart" icon-if-md="material:shopping_cart" ></f7-link>
      </f7-col>
    </f7-row>
   </f7-nav-right>
   </f7-navbar>

    
    <f7-block  >
         <f7-row  v-if=" products.length " :key="products.product_Id">
      <f7-col style="height:100%">
            <f7-swiper pagination style="border:solid; " >
              <f7-swiper-slide>
                <img  v-bind:src=" products[0].thumb " width="100%" />
              </f7-swiper-slide>
              <f7-swiper-slide><img  class="responsive" v-bind:src=" products[0].thumb " width="100%" /></f7-swiper-slide>
              <f7-swiper-slide><img  v-bind:src=" products[0].thumb "  width="100%"/></f7-swiper-slide>
            </f7-swiper>
      </f7-col>
      <f7-col>
            <f7-swiper pagination style="border:solid; " >
              <f7-swiper-slide>
                <img  v-bind:src=" products[0].thumb " width="100%" />
              </f7-swiper-slide>
              <f7-swiper-slide><img  class="responsive" v-bind:src=" products[0].thumb " width="100%" /></f7-swiper-slide>
              <f7-swiper-slide><img  v-bind:src=" products[0].thumb "  width="100%"/></f7-swiper-slide>
            </f7-swiper>
      </f7-col>
    </f7-row>
       
    </f7-block >
    <f7-block>
      <f7-row>
        <f7-col style="text-align:center"><h2> Select Size</h2></f7-col>
         <f7-col style="text-align:center"><h2> Size Chart</h2></f7-col>

      </f7-row>

      <f7-row>
        <f7-col>
          <button @click=" getPostsViaREST " style=" border-radius: 100%;  height:60px; width:10px; background:black" class="col button button-small  button-fill"><h3>S</h3></button>
        </f7-col> 
        <f7-col>
          <button style=" border-radius: 100%;  height:60px; width:10px;background:black" class=" button button-small  button-fill"><h3>M</h3></button>
        </f7-col>  
        <f7-col>
          <button style=" border-radius: 100%;  height:60px; width:10px; background:black" class=" button button-small button-fill"><h3>L</h3></button>
        </f7-col>  
        <f7-col>
          <button style=" border-radius: 100%;  height:60px; width:10px; background:black" class="col button button-small  button-fill"><h3>XL</h3></button>
        </f7-col>

      </f7-row>

       
      
    </f7-block>
    <f7-block>
     
    

    <f7-row  v-if=" products.length ">
      
      <f7-col>
            
            <h3>{{  products[0].name }}   </h3>
      
            <p>{{  products[0].description }} </p>

            <span> {{ products[0].price }}</span>

            
      </f7-col>
    </f7-row>
  </f7-block>
    <div class="row">
     
        <div class="col-50">
         <f7-button  href="/login/" style="background:black; width:100%" class="button-fill button-full">
       
        Add To Cart </f7-button>
      </div>
      
      <div class="col-50">
         <f7-button style="background:black; width:100%" class="button-fill button-full">
     
        Add To Whislist </f7-button>
      </div>
    </div>
      
 
   
   
 
   
  
  </f7-page>
</template>
<script>
import axios from 'axios';
export default {
   data: function () {
    return {
      id:this.$f7route.params.productId,
      products: {}
    }
  },
  created(){
           axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&product_id='+this.id).then(response => {this.products = response.data})
          // window.addEventListener('scroll', this.handleScroll); // helps to handle scroll //
        },
         methods: {
    getPostsViaREST (event) {
       axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&path=442').then(response => {this.products = response.data})
    }
  },
  
}
</script>