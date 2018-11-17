
<template >

  <!--v-smooth-scroll="{ duration: 1000, offset: -50 }-->
  <f7-page>
     <a class="link back">
          <i class="icon icon-back"></i>
          <span class="ios-only">Back</span>
        </a>
   <f7-navbar v-bind:title=" $f7route.hash " back-link="Back" color="black"></f7-navbar>
    <f7-block-title>This is category id : {{$f7route.params.pathId}} </f7-block-title>
    <f7-block>


      <div class="row" >
        
        <div class="col-50"  v-for="(product,index) in products"  :key="product.product_id"  v-if="products && products.length >0 && index <= limitationList">
          <f7-card>
            <f7-card-header> <f7-label ><h3 >{{product.name}}</h3></f7-label></f7-card-header>
            <f7-card-content> 
              <img class="responsive" v-bind:src=" product.thumb " width="100%" />
            </f7-card-content>
          <f7-card-footer>
            <f7-label > 
              <h1 link="'/product/'+product.product_id" ></h1>
              <h3>₹{{product.price}}
                <h3 >{{product.kbcode}}</h3>
              </h3>
          </f7-label>
            <f7-label class="responsive" ></f7-label>
          </f7-card-footer>
            
            
          </f7-card>
        </div>

      </div>
      <f7-row>
        <f7-col></f7-col>
         <f7-col><f7-button class="col button button-fill color-green "   @click="updateLimitation(limitationList)">
    show {{limitationList == 3 ? 'More' : 'Less'}}
  </f7-button></f7-col>
          <f7-col></f7-col>
      </f7-row>
      
        
         
       
         

  
     
<!--      
    <f7-row  class="lazy lazy-fade-in" v-for="(product,index) in products" :key="index" >  
      
    <f7-col  v-for="i in 2" > 
      <f7-list media-list class="lazy  lazy-fadeIn" >
        <f7-list-item >
           <img class="imgsize" slot="media"  v-bind:src=" product.thumb " width="120"/>
        </f7-list-item>   
          <f7-list-item 
            v-bind:link="'/product/'+product.product_id"
            v-bind:title="product.name"
            v-bind:after="product.price"
            v-bind:subtitle="product.kbcode"
          >            
          </f7-list-item> 
     </f7-list>
    </f7-col>-->
    
   <!-- {{showProduct(index)}}-->
    </f7-row>

  </f7-block>
 <!-- <f7-button big @click="getPostsViaREST" color="green">Load more..</f7-button> -->
   <!--<f7-button big color="green">Load more..</f7-button>-->

    <f7-row >

     <f7-navbar class="footer">

      <f7-nav-left>
        <f7-link icon-if-ios="f7:sort"  icon-if-md="material:sort" href="/sort/" > Sort </f7-link>
       
      </f7-nav-left>
              
      <f7-nav-right>
       
        <f7-link icon-if-ios="f7:filter-fill" icon-if-md="material:filter_list"   > Filter</f7-link> 
      </f7-nav-right>
    </f7-navbar>  
    </f7-row>
    

  </f7-page>
</template>

<script>
import axios from 'axios';
export default {
   data: function () {
    return {
      id:this.$f7route.params.pathId,
      products: {},
       limitationList:5
     
    }
  },
  methods: {
    checkProduct(index) {
    this.indexer = ++this.indexer 
    if(this.indexer>this.index) {
      return true
    } else {
      return false
    }
      
    },
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
        }, 2000);
    
  },
  
},
  created(){
          axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&path='+this.id).then(response => {this.products = response.data})
          window.scrollTo(0, document.body.scrollHeight ||
           document.documentElement.scrollHeight);

        },  
}

</script>