<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>KB</f7-nav-title>
      <f7-nav-right>
        <f7-icon material="search"></f7-icon>
        <f7-link icon-if-ios="f7:cart" icon-if-md="material:cart" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>
    
    <f7-block strong>
      <h1>Kashmirbox</h1>
      <div data-pagination='{"el": ".swiper-pagination"}' data-space-between="50" class="swiper-container swiper-init demo-swiper">
  <div class="swiper-pagination"></div>
  <div class="swiper-wrapper">
    <div class="swiper-slide">Welcome to Kashmirbox slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    <div class="swiper-slide">Slide 4</div>
    <div class="swiper-slide">Slide 5</div>
    <div class="swiper-slide">Slide 6</div>
    <div class="swiper-slide">Slide 7</div>
    <div class="swiper-slide">Slide 8</div>
    <div class="swiper-slide">Slide 9</div>
    <div class="swiper-slide">Slide 10</div>
  </div>
</div>
    </f7-block>
    
     
  </f7-page>
</template>
<script>
export default {}
</script>
