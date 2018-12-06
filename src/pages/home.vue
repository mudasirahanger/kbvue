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
         <f7-link icon-if-ios="f7:shopping_cart"icon-if-md="material:shopping_cart" ></f7-link>
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
