<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name: 'home'}">Site Logo</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="navbar-brand" :to="{name: 'home'}">Home</router-link>
        </li>
        <li class="nav-item">
         <router-link class="navbar-brand" :to="{name: 'category'}">Product categgory</router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand" :to="{name: 'productlist'}">Product List</router-link>
        </li>
        
        
      </ul>
     
    </div>
  </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>