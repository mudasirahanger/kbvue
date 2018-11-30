<template>
  <f7-page>
    <f7-card>
  <f7-card-header> <f7-block-title>SignUp</f7-block-title></f7-card-header>
  <f7-card-content>
    <f7-list form>
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
      
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input type="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
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
      </f7-list-item>   
    </f7-list></f7-card-content>
  <f7-card-footer>Card footer content</f7-card-footer>
</f7-card>
    <f7-navbar title="Form" back-link="Back"></f7-navbar>
   
  </f7-page>
</template>

<script>
export default {}
</script>
