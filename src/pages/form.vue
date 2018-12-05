<template>
  <f7-page>
    <f7-navbar class=" toolbar-fixed navbar-fixed" v-bind:title=" $f7route.hash " back-link="Back" color="black" title="Back"></f7-navbar>
    <f7-card>
  
    <f7-card-header style="background:black; color:white; text-align:center"> 
       <f7-row>
        
           <f7-col >
                <h3>SignUp</h3>
            
          </f7-col>
     </f7-row>
     </f7-card-header>
      
  <f7-card-content>
    <f7-list @submit.prevent="onSignUp" action="/product/" method="post">
      <f7-list-item>
        <f7-label floating>Name</f7-label>
        <f7-input id="name" v-model="name" type="text" name="name"></f7-input>
        <!--<f7-input type="text" placeholder="Name" ></f7-input>-->
      </f7-list-item>
      <f7-list-item>
        <f7-label floating>E-mail</f7-label>
        <f7-input name="email" type="email"  id="email"  required clear-button></f7-input>
      </f7-list-item>
      
      <f7-list-item>
        <f7-label floating>Password</f7-label>
        <f7-input name="password" type="password"  id="password"  required></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label> Confirm Password</f7-label>
        <f7-input name="confirmPassword" type="password"  id="confirmPassword"  :rules="[comparepassword]" ></f7-input>
      </f7-list-item>
      <f7-list-item>
      <button type="submit" class="button button-fill"  style="background:green" >Sign Up</button>
    </f7-list-item>
     <!-- <f7-list-item>
        <f7-label>Phone</f7-label>
        <f7-input type="tel" placeholder="Phone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input type="select">
          <option selected>Male</option>
          <option>Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
      </f7-list-item> -->  
    </f7-list></f7-card-content>
  <f7-card-footer style="background:black"></f7-card-footer>
</f7-card>
    
   
  </f7-page>
</template>

<script>

export default {
  data(){
    return{
      email:'' ,
      name:'',
      password:'',
      confirmPassword:''
    } 
  },
  computed:{
    comparepassword(){
      return this.password!==this.confirmPassword ? 'Passwor do not match' :''

    },
    methods:{
    onSignUp()
    {
     axios.post('http://localhost:8080/category', 
     {
          email:'' +this.email,
          name: '' + this.name,
          password: '' + this.password,
    }
  }
}
}
  
  



