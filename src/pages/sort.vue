<template>
  <f7-page on:Load="openIndicator" >


   <!-- <f7-navbar title="Back"> <Link back>Back</Link> </f7-navbar>-->
    <f7-block strong><h1> SORT BY</h1></f7-block>
     <f7-navbar back-link="Back" ></f7-navbar>
    <f7-block>
      <f7-link icon-if-ios="f7:filter-fill" icon-if-md="material:star_border"> Newest</f7-link>
    </f7-block>
    <f7-block>
       <f7-link icon-if-md="material:attach_money"> Price:High to Low</f7-link>
    </f7-block>
    <f7-block>
       <f7-link icon-if-ios="f7:filter-fill" icon-if-md="material:attach_money"   > Price:Low to High</f7-link>
    </f7-block>  
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
        }, 1000);
    
  },
  
}




}
</script>