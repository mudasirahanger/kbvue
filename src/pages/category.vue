
<template >

  <!--v-smooth-scroll="{ duration: 1000, offset: -50 }-->
  <f7-page>
    
   <f7-navbar class=" toolbar-fixed navbar-fixed" v-bind:title=" $f7route.hash " back-link="Back" color="black"></f7-navbar>

    <f7-block-title>
      <f7-row><f7-col class="col-50">This is category id : {{$f7route.params.pathId}}
      </f7-col><f7-col class="col-50"> products  found {{products.length}}</f7-col>

      </f7-row>
    <f7-block-title> {{ $f7route.hash }} </f7-block-title>
  </f7-block-title>

  <f7-block>
      <div class="row" >
        <div class="col-50"  v-for="(product,index) in products"  :key="product.product_id"  v-if="products && products.length >0 && index <= limitationList">
          <f7-card>
            <f7-card-header> 
              <f7-label>
                
                <f7-button><a style="color:black" v-bind:href="'/product/'+product.product_id" >{{product.name}}</a> </f7-button>
              </f7-label>
            </f7-card-header>
            <f7-card-content               
              <img class="responsive" v-bind:src=" product.thumb "  width="100%" />
              <f7-row>
                <f7-col>
                  <h4>
                    {{product.kbcode}}  |  
                    ₹{{product.price}}  
                  </h4>
                   <h4>
                    <f7-col style="color:red"> (10% OFF) </f7-col>
                   </h4>
              <f7-row >
                <f7-col > 
                  <f7-link v-for="i in 5"  style="color:orange"  icon-if-md="material: star" ></f7-link>
                  </f7-col>
              </f7-row>
                </f7-col> 
              </f7-row>
            </f7-card-content>
          </f7-card>
        </div>
      </div>
      <f7-row>
        <f7-col></f7-col>
         <f7-col><f7-button class="col button button-fill color-green "   @click="updateLimitation(limitationList)">
    show {{limitationList == 3 ? 'More' : 'Less'}}
      </f7-button> </f7-col>
          <f7-col></f7-col>
      </f7-row>
    </f7-row>
</f7-block>

  <f7-toolbar class="toolbar  toolbar-bottom-md" > 
 
             <f7-toolbar class="toolbar-inner" style="background-color:black;"  >
               <f7-nav-left>
                 <f7-row >
        <f7-link style="font-size:20px;width:150px" icon-if-ios="f7:sort" v-on:click="openIndicator()" icon-if-md="material:sort" href="/sort/" > Sort </f7-link>
      </f7-row>
        
      </f7-nav-left>
      <h1>|</h1>
        <f7-nav-right>
          <f7-row >
        <f7-link style="font-size:20px;width:150px" icon-if-ios="f7:filter-fill" link="/category/1391#Men Clothings" v-on:click=" openIndicator()" href="/filter/" icon-if-md="material:filter_list"> Filter</f7-link> 
      </f7-row>
      </f7-nav-right>
            </f7-toolbar>
          </f7-toolbar> 
    
  </f7-page>
</template>

<script>
import axios from 'axios';
export default {
   data: function () {
    return {
       id:this.$f7route.params.pathId,
      products: [],
       limitationList:3,
        loading: true 
    }
  },
  methods: {
       updateLimitation(limitationList){
  if (this.limitationList == this.products.length) {
    this.limitationList = 3
  }else{
    this.limitationList = this.products.length
  }
},
    openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 1000);
    
  },
  
},
  created(){
       axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&path='+this.id).then(response => {this.products = response.data})
          
        },  
}

</script>