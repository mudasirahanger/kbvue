<template>
  <f7-page>
    
    <form  id="app" @submit="checkForm" action="https://vuejs.org/" method="post"
  novalidate="true">
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li  style ="color:red" v-for="error in errors">{{ error }}</li>
    </ul>
  </p>


<f7-list>
  <f7-list-item>
    <label for="name">Name</label>
  </f7-list-item>
  <f7-list-item>
    <f7-input id="email" v-model="email" type="email"  placeholder="Name">
    </f7-input>
  </f7-list-item>
 </f7-list>

 <f7-list>
  <f7-list-item>
    <label for="password">Email</label>
    </f7-list-item>
    <f7-list-item>
    <input id="password" v-model="password" type="password" placeholder="password" name="password">
  </f7-list-item>
 </f7-list>

  <p>
    <f7-input  class="col button bold color-green" type="submit" >submit
    </f7-input>
   
  </p>

</form>

      
     
    </f7-list>
  </f7-page>
</template>

<script>
export default {
   data(){
    return{
    errors:[],
    email:null,
    password:null
   
  }
  },
  methods:{
    checkForm:function(e) {
      if(this.email && this.password) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Email required.");
      if(!this.email) this.errors.push("Password required.");
      e.preventDefault();
    }
  }

}
</script>
