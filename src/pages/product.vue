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
        This is product id : {{$f7route.params.pathId}}

   <f7-row v-for="(product,index) in products" :key="product.product_id">
          <f7-col>
            <img  v-bind:src=" product.thumb " width="100%" />
            {{product.name}}
            {{product.price}}

          </f7-col>

          <f7-button v-on:click="addToCart(product)" style="background-color:#e40046;color:white">Add To Cart

        </f7-button>

        </f7-row>
        <f7-card>
          <f7-card-content>
            <f7-card-header>Cart products</f7-card-header>
         <h4> total amount{{total}}</h4>
       </f7-card-content>
       </f7-card>
        
           
       <!--<f7-row  v-if="products.length" :key="products.product_id" >
          <f7-col style="height:100%">
            <f7-swiper pagination    >
               <f7-swiper-slide v-for="i in 4">
                    <img v-bind:src=" products[0].thumb " width="100%" />
                </f7-swiper-slide>
           </f7-swiper>
           
                <h3>{{ products[0].name }}  </h3>
                <p>{{products[0].description }} </p>
               <span> {{ products[0].price }}</span>
               <f7-button class="button " style="background-color:#e40046;color:white"><a style="color:white" v-bind:href="'/cart/'+products.product_id" > Add To Cart</a> </f7-button>
               
            
          </f7-col> 
        </f7-row>-->
      

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
            <button  @click=" getPostsViaREST" style=" border-radius: 100%;  height:60px; width:10px;background:black" class=" button button-small  button-fill"><h3>M</h3></button>
          </f7-col>  
          <f7-col>
            <button @click=" getPostsViaREST" style=" border-radius: 100%;  height:60px; width:10px; background:black" class=" button button-small button-fill"><h3>L</h3></button>
          </f7-col>  
          <f7-col>
            <button @click=" getPostsViaREST" style=" border-radius: 100%;  height:60px; width:10px; background:black" class="col button button-small  button-fill"><h3>XL</h3></button>
          </f7-col>
        </f7-row>   
      </f7-block>
      <f7-toolbar class="toolbar  toolbar-bottom-md" > 
        <f7-toolbar class="toolbar-inner" style="background-color:black;"  >
          <f7-nav-left>
             <f7-button style="background:black; width:100%" class="button-fill button-full">
               Add To Cart </f7-button>
              </f7-label>
            
          </f7-nav-left>
            <h1>|</h1>
          <f7-nav-right>
            <f7-button style="background:black; width:100%" class="button-fill button-full">
               Add To Whislist </f7-button>
          </f7-nav-right>
        </f7-toolbar>      
      </f7-toolbar>
      <f7-card>
        <f7-card-header>Dilevery & Services</f7-card-header>
          <f7-block> <f7-searchbar placeholder="Enter Pincode"><button style="background:black; color:white; border-width:none; height:50px "> Pin Code</button> </f7-searchbar></f7-block>
        <f7-card-content>
           <f7-list>
             <f7-list-item>
               100% Original Products
             </f7-list-item>
              <f7-list-item>
               Easy 30 days returns & 30 days exchanges
             </f7-list-item>
              <f7-list-item>
              Free Delivery on order above Rs. 1199
             </f7-list-item>
             <f7-list-item>
              Try & Buy might be available
             </f7-list-item>
               
           </f7-list>
          
        </f7-card-content>
      </f7-card>
   <!-- Similar Products
   <f7-card v-onLoad="similarproducts">
      <f7-card-content>
        <f7-block>
          <f7-row>
            <h4> Similar Product</h4>
            <f7-col> 
              <f7-swiper pagination   >
                <f7-swiper-slide v-for="(product,index) in products"  :key="product.product_id" >
              <div class="row" >
                <div class="col-100" >
                  <f7-card  >
                        <f7-card-header >
                          <f7-button v-on:click="addToCart(product)" style="color:black">{{product.name}}
                          </f7-button>
                          <button v-on></button>
                        </f7-card-header>
                        <f7-card-content >
                          <img  v-bind:src=" product.thumb " width="100%" />
                        </f7-card-content>
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
                    <f7-link v-for="i in 5" :key="product.product_id" style="color:orange"  icon-if-md="material: star" ></f7-link>
                  </f7-col>
                </f7-row>
                  </f7-col>
              </f7-row>
                  </f7-card>
                
            </div>
        </div>
       </f7-swiper-slide>
    </f7-swiper>
              </f7-col>
            </f7-col>  
          </f7-row>
        </f7-block>
      </f7-card-content>
    </f7-card>-->
  </f7-page>
</template>
<script>
import axios from 'axios';


export default {

   data: function () {
    return {
       id:this.$f7route.params.pathId,
      products: {},
      total:0,
      cart:[],
     
    }

          
    },
   
   
  created(){
             axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProductDetials&product_id='+this.id).then(response => {this.products = response.data})
          // window.addEventListener('scroll', this.handleScroll); // helps to handle scroll //
          
        },
         methods: {
    getPostsViaREST (event) {
       axios.get('https://www.kashmirbox.com/index.php?route=feed/product/getProducts&path=442').then(response => {this.products = response.data})
    },
    
    addToCart(product) 
  {
    this.total+=product.price;
    alert(this.total+product.kbcode);
     this.cart.push(product);
    //console.log(this.total);
  }
 
  } 
}
</script>