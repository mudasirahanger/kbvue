<template>
  <f7-page>
    <f7-card>
     <f7-card-header style="background:black; color:white;   "> 
       <f7-navbar class=" toolbar-fixed navbar-fixed" v-bind:title=" $f7route.hash " back-link="Back" color="black" title="Back"></f7-navbar>
     </f7-card-header>
      <f7-card-content>
        <f7-row>
           <f7-col>
                <h1 style="text-align:center">KB-LOGIN</h1>
          </f7-col>  
        </f7-row>
          <form @submit.prevent="checkForm" action="/product/" method="post">
            <f7-list >
              <f7-list-item>
                <f7-label floating>Email</f7-label>
                  <f7-input  @input="email=$event.target.value"  id="email" name="email" type="text" placeholder="Email" autocomplete="true" clear-button></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label floating>Password</f7-label>
                  <f7-input  @input="password=$event.target.value"  name="password" type="text" placeholder="Password" clear-button></f7-input> 
              </f7-list-item> 
            </f7-list>
              <button class=" button button-fill" style=" background:black"  type="submit">Log in</button>
          </form>
                    <!--  <f7-list form  @submit.prevent="checkForm" >
                 Text Input -->
               <!-- <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li  style ="color:red" v-for="error in errors">{{ error }}</li>
                  </ul>
                </p>
                      <f7-list-item>
                      <f7-icon slot="media" f7="person"></f7-icon>
                       <f7-label floating>userName</f7-label>
                       <f7-input  @input="username=$event.target.value" name="username" type="text" placeholder="Username" clear-button></f7-input>
                       
                    </f7-list-item>-->
                <!-- Password 
                    <f7-list-item>
                      <f7-icon slot="media" f7="lock"></f7-icon>
                      <f7-label floating>passWord</f7-label>
                      <f7-input  @input="password=$event.target.value" name="password" type="text" placeholder="Password" clear-button></f7-input>
                    </f7-list-item>       
          </f7-list>--> 
          <f7-row>
            <f7-col> <f7-link style="color:red"  href="/forget/" ><h4>forget Password?</h4></f7-link></f7-col>
             <f7-col style="text-align:center"><h4>New to KB ?<f7-link style="color:red"  href="/form/" >create account</f7-link></h4></f7-col>
          </f7-row>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>
<script>
export default 
{
   data(){
    return{
    errors:[],
     email: '',
     passowrd:''  
    }
},
 methods: {
     
     checkForm() {
     
        if(this.email==='abc@gmail.com'&& this.password==="password") 
        {
        
            alert("login successfull"),
             this.$session.start();

          }
         if(this.email!=='abc@gmail.com' || this.password!=="password") 
         {

            alert(" email or password is incorrect")
          }
      }
  },
   onLogin(){
      alert(this.username,this.password)
    }
  
}
</script>
