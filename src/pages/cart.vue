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
            <f7-link   href="/cart/" link="/cart/"  icon-if-md="material:shopping_cart" view="#main-view" ></f7-link>
          </f7-col>
        </f7-row>
      </f7-nav-right>
    </f7-navbar>
          <f7-card>
          <f7-card-content>
            <f7-card-header ><h3>Your Cart</h3></f7-card-header>
        <f7-row >
          <f7-col>

            <img  v-bind:src=" product.thumb " width="100%" />
          </f7-col>
          <f7-col>
            This is product id : {{$f7route.params.pathId}}

            <f7-list>
              <f7-list-item>
               {{product.name}}
              </f7-list-item>
              <f7-list-item>
               <!-- ₹ {{product.price}}-->
               ₹ 1200x{{qty}}

              </f7-list-item>
              <f7-list-item>
            
               total₹ {{total}}
              </f7-list-item>
              <f7-list-item>
                 <f7-button  style="background-color:#504C47;color:white; width:100%" icon-if-md="material:shopping_cart" > Check Out </f7-button>

              </f7-list-item>
              <f7-list-item>
                 <f7-button  style="background-color:#504C47;color:white;width:100% " icon-if-md="material:add" > Add products </f7-button>
              </f7-list-item>
            </f7-list>
          </f7-col>
        </f7-row>
        <div >
          <h2>Shopping Cart</h2>
        <ul>
        <li v-for="item in cart" v-bind:key="item.id">
            {{ item.title }}
        </li>
    </ul>
    <div>
        Total: {{ total }}
    </div>
</div>
            
       
       </f7-card-content>
       </f7-card>
  </f7-page>
</template>
<script>
export default {
data(){
  return{
     id:this.$f7route.params.pathId,
    product:[]

  }
},
methods:{
  openIndicator() {
        const self = this;
        self.$f7.preloader.show();
        setTimeout(() => {
          self.$f7.preloader.hide();
        }, 1000);
    
  },
  
}




}
</script>