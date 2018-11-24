      <template>
        <f7-page on:Load="openIndicator" >
         <!-- <f7-navbar title="Back"> <Link back>Back</Link> </f7-navbar>-->   
            
            <f7-navbar back-link="Back" > Back</f7-navbar>            
           <!--<f7-block>
            <f7-searchbar placeholder="search"></f7-searchbar>
          </f7-block>-->
          <f7-row>
            <f7-col>
              <f7-row>
                <f7-col>
                  <f7-block>
                    <f7-list>
                      <f7-list-item accordion-item title="Color">
                        <f7-accordion-content>
                          <f7-list> 
                            <ul>
                               <li>
                                <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Black" view="#main-view" panel-close></f7-list-item>              </li>
                            </ul> 
                            <ul>
                              <li>
                                <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Blue" view="#main-view" panel-close></f7-list-item>
                                </li>
                            </ul> 
                            <ul>
                             <li>
                                <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Brown" view="#main-view" panel-close></f7-list-item>              
                             </li>
                            </ul> 
                            <ul>
                              <li>
                                <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Multi-color" view="#main-view" panel-close>   
                                </f7-list-item>
                               </li>
                            </ul> 
                          </f7-list>
                        </f7-accordion-content>
                      </f7-list-item>
                      <f7-list-item accordion-item strong title="Fabric">
                        <f7-accordion-content>
                          <f7-list> 
                            <ul>
                               <li>
                                <f7-list-item  link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Cashmere Pashmina" view="#main-view" panel-close></f7-list-item> 
                              </li>
                                  </label>
                                </li>
                            </ul> 
                           
                            <ul>
                                 <li>
                                <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Wool" view="#main-view" panel-close></f7-list-item>              </li>
                            </ul> 
                            
                          </f7-list>
                        </f7-accordion-content>
                      </f7-list-item>
                      <f7-list-item accordion-item title="Type">
                        <f7-accordion-content>
                          <f7-list> 
                            <ul>
                               <li>
                                 <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Suits" view="#main-view" panel-close></f7-list-item>  
                                </li>
                            </ul> 
                            <ul>
                              <li>
                                  <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Coats" view="#main-view" panel-close></f7-list-item>  
                              </li>
                            </ul> 
                          </f7-list>
                        </f7-accordion-content>
                      </f7-list-item>
                      <f7-list-item accordion-item title="Occasions">
                        <f7-accordion-content>
                          <f7-list> 
                            <ul>
                               <li>
                                  <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Formal" view="#main-view" panel-close></f7-list-item>  
                                </li>
                            </ul>  
                          </f7-list>
                        </f7-accordion-content>
                      </f7-list-item>
                      <f7-list-item accordion-item  view="#main-view" title="Craft">
                        <f7-accordion-content  >
                          <f7-list> 
                            
                            <ul>
                               <li>
                                 <f7-list-item link="/category/1391#Men Clothings" v-on:click=" openIndicator()" title="Pashmina" view="#main-view" panel-close></f7-list-item>  
                                </li>
                            </ul>  
                          </f7-list>
                        </f7-accordion-content>
                      </f7-list-item>
                    </f7-list>
                  </f7-block>
                </f7-col>
              </f7-row>
            </f7-col>
            <f7-col>             
      <f7-block>
        <div class="row" >
          <div class="col-50"  v-for="(product,index) in products.slice(4,6)"  :key="product.product_id">
            <f7-card>
              <f7-card-header> <f7-label ><h4>{{product.name}}</h4></f7-label></f7-card-header>
              <f7-card-content> 
                <f7-link  v-bind:link="'/product/'+product.product_id"></f7-link>
                <img class="responsive" v-bind:src=" product.thumb "  width="100%" />
              </f7-card-content>
            <f7-card-footer>
                <f7-row>
                  <f7-col>
                    <f7-label > 
                  <h3>
                  ₹{{product.price}}  
                  <h3 >
                    {{product.kbcode}}
                  </h3>
                </h3>
                </f7-label>
                  </f7-col>                
                </f7-row>

              <f7-label class="responsive" >    
              </f7-label>
            </f7-card-footer>  
            </f7-card>
          </div>
        </div>       
              </f7-block>
            </f7-col>
            </f7-col>
          </f7-row>
        </f7-page>
</template>
<script>
import axios from 'axios';
 export default {
      data(){
        return{
          id:this.$f7route.params.pathId,
      products: {},
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
          window.scrollTo(0, document.body.scrollHeight ||
           document.documentElement.scrollHeight);
        }  
 }

</script>