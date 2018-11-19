<template>
  <f7-page>
    <f7-navbar title="My Profile"> </f7-navbar>
    <f7-block strong>
      <p>Shop By</p>
    </f7-block>
        <f7-list>

      <!--<f7-list-item link="/categories/" title="Categories" view="#main-view" panel-close></f7-list-item>-->
      <f7-list-item accordion-item title="MEN">
	    <f7-accordion-content>
	      <f7-list>
	      	 <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Men" view="#main-view" panel-close></f7-list-item>
	        <f7-list-item accordion-item link="" title="kurta pajama">
	        <f7-accordion-content> 
	         <f7-list> 
	        	<f7-list-item link="" title="new">
	        	</f7-list-item>
	        </f7-list>
	        </f7-accordion-content>
	        </f7-list-item>
	        <f7-list-item link="" title="Suiting "></f7-list-item>
	        <f7-list-item link="" title="Waist Coats"></f7-list-item>
	        <f7-list-item link="" title="Phirans"></f7-list-item>
	      </f7-list>
	    </f7-accordion-content>
  	</f7-list-item>
  	 <f7-list-item accordion-item title="WOMEN">
	    <f7-accordion-content>
	      <f7-list>
	        <f7-list-item link="" title="SUMMER CLOTHING "></f7-list-item>
	        <f7-list-item link="" title="WINTER CLOTHING"></f7-list-item>
	        <f7-list-item link="" title="PASHMINA "></f7-list-item>
	        <f7-list-item link="" title="WOOLEN WRAPS"></f7-list-item>
	      </f7-list>
	    </f7-accordion-content>
  	</f7-list-item>
  	<f7-list-item accordion-item title="FOOD">
	    <f7-accordion-content>
	      <f7-list>
	        <f7-list-item accordion-item link="" title="HEALTHY FOODS">
	        	 <f7-accordion-content> 
	         <f7-list> 
	         	 <f7-list-item link :to="'/product/' + product.id" tag="h4"><a>
	         	 {{ product.name }}</a></f7-list-item link >
	        	<f7-list-item link="/dryFruits/name" main:pushState="true" title="Dry Fruits" view="#main-view">
	        	</f7-list-item>
	        </f7-list>
	        </f7-accordion-content>
	        </f7-list-item>
	        <f7-list-item link="" title="INDLUGENT"></f7-list-item>
	        <f7-list-item link="" title="GROW YOUR OWN"></f7-list-item>
	        <f7-list-item link="" title="Phirans"></f7-list-item>
	      </f7-list>
	    </f7-accordion-content>
  	</f7-list-item>
  	<f7-list-item accordion-item title="BEAUTY">
	    <f7-accordion-content>
	      <f7-list>
	        <f7-list-item link="" title="ORGANIC"></f7-list-item>
	        
	      </f7-list>
	    </f7-accordion-content>
  	</f7-list-item>
  	<f7-list-item accordion-item title="DECOR">
	    <f7-accordion-content>
	      <f7-list>
	        <f7-list-item link="" title="ACCENT "></f7-list-item>
	        <f7-list-item link="" title="FLOORING"></f7-list-item>
	        <f7-list-item link="" title="FURNISHING "></f7-list-item>
	        <f7-list-item link="" title="FURNITURE"></f7-list-item>
	      </f7-list>
	    </f7-accordion-content>
  	</f7-list-item>
  	<f7-list-item accordion-item title="SHOP BY">
	    <f7-accordion-content>
	      <f7-list>
	        <f7-list-item link="" title="CLOTHES "></f7-list-item>
	        <f7-list-item link="" title="PASHMINA"></f7-list-item>
	        <f7-list-item link="" title="WOOLEN WRAPS"></f7-list-item>
	        <f7-list-item link="" title="ACCESSORIES"></f7-list-item>
	      </f7-list>
	    </f7-accordion-content>
  	</f7-list-item>
  		<f7-list-item accordion-item title="BLOG">
	    <f7-accordion-content>
	      <f7-list>
	       
	      </f7-list>
	    </f7-accordion-content>
  	</f7-list-item>
  	 <f7-list-item link="/form/" title="SignUp" view="#main-view" panel-close></f7-list-item>
  	 </f7-list-item>
  	 <f7-list-item link="/login/" title="Login" view="#main-view" panel-close></f7-list-item>
  	 
      
    </f7-list>
  </f7-page>
</template>
<script>
export default {
data(){
	return{
		product:[]

	}
},
methods:{
	  openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 500);
    
  },

},




}
</script>