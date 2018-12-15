<template>
  <f7-page>
    
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>KB</f7-nav-title>
      <f7-nav-right>
        <f7-nav-right>
          </f7-nav-right>
          <f7-nav-left>
        <f7-link icon-if-md="material:favorite"  href="/login/"></f7-link>
         <f7-link icon-if-ios="f7:shopping_cart" icon-if-md="material:shopping_cart" ></f7-link>
          <f7-link icon-if-md="material:search" ></f7-link>
      </f7-nav-left>
        
       
      </f7-nav-right>
    </f7-navbar>
     <h1 style="text-align: center; "> Welcome to the Kashmirbox</h1>
     <img src="https://www.kashmirbox.com/offers/images/Main-banner.jpg" height="auto" width="100%">
    
    <f7-block >
      <button class=" button  button- fill " style="background:black">
       <f7-link  style="color:white; font-size:12px" icon-if-ios="f7:filter-fill" href="/category/1391#Men Clothings" > Click Me  Mens Clothing---></f7-link> 
     </button>
       
    
     </f7-block>
     <f7-block>
       <f7-card  >
        <f7-card-header > <h1>Top Selling Products</h1></f7-card-header>
        <f7-card-content>
          <f7-swiper pagination >
            <f7-row >
              <f7-col class="col-33"  >
           <f7-swiper-slide  >
             <img  src="https://www.kashmirbox.com/image/cache/catalog/Kb_Images/healthy_living/exotic_foods/dryfruits/snow_white_walnut_kernel-786x1000.jpg" height="auto" width="100%">
           </f7-swiper-slide>

         </f7-col>
         <f7-col class="col-33"   >
           <f7-swiper-slide  >
             <img  src="https://www.kashmirbox.com/image/cache/catalog/Kb_Images/women/clothing/sarees/KB8368(12)-786x1000.jpg" height="auto" width="100%">
           </f7-swiper-slide>
           
         </f7-col>
          <f7-col class="col-33"  >
           <f7-swiper-slide  >
             <img  src="https://www.kashmirbox.com/image/cache/data/KB%20Product%20Images/Shop%20by%20Craft/Paper%20Mache/KB2407%20(1)-786x1000.jpg" height="auto" width="100%">
           </f7-swiper-slide>
           
         </f7-col>
       </f7-row>
            
          </f7-swiper>
        </f7-card-content>
         <f7-swiper pagination >
            <f7-row >
              <f7-col class="col-33"  >
           <f7-swiper-slide  >
             <img  src="https://www.kashmirbox.com/image/cache/catalog/Kb_Images/healthy_living/exotic_foods/dryfruits/snow_white_walnut_kernel-786x1000.jpg" height="auto" width="100%">
           </f7-swiper-slide>

         </f7-col>
         <f7-col class="col-33"   >
           <f7-swiper-slide  >
             <img  src="https://www.kashmirbox.com/image/cache/catalog/Kb_Images/women/clothing/sarees/KB8368(12)-786x1000.jpg" height="auto" width="100%">
           </f7-swiper-slide>
           
         </f7-col>
          <f7-col class="col-33"  >
           <f7-swiper-slide  >
             <img  src="https://www.kashmirbox.com/image/cache/data/KB%20Product%20Images/Shop%20by%20Craft/Paper%20Mache/KB2407%20(1)-786x1000.jpg" height="auto" width="100%">
           </f7-swiper-slide>
           
         </f7-col>
       </f7-row>
            
          </f7-swiper>
        </f7-card-content>
       </f7-card>
     </f7-block>
    
     
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
          axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&path='+1391).then(response => {this.products = response.data})
          window.scrollTo(0, document.body.scrollHeight ||
           document.documentElement.scrollHeight);
        }, 
 
}
</script>
