// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

import * as firebase from 'firebase'
// Import App Component
import App from './app.vue';
//import vueSmoothScroll from 'vue-smooth-scroll';

import axios from 'axios/dist/axios.min.js';
import vue from 'vue/dist/vue.min.js';
import vueresource from 'vue-resource/dist/vue-resource.min.js';



// Init F7 Vue Plugin
Framework7.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',

  // Register App Component
  components: {
    app: App
  },
 //created(){
  	//firebase.IntializeApp({
  	//apiKey: 'AIzaSyAlIVk4JifErJb6i_-RsAR9Dz4RqDJyX8k',
    //authDomain: 'mykb-c17bd.firebaseapp.com',
    //databaseURL: 'https://mykb-c17bd.firebaseio.com',
   // projectId: 'mykb-c17bd',
   // storageBucket: 'mykb-c17bd.appspot.com'
  	//})

  //}-->
});
