<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <div class="card">
          <div class="card-header d-flex justify-content-between alin-item-center"> 
            <h5>Create category</h5>
           <router-link :to="{name: 'category'}" class="btn btn-primary">Product List</router-link>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6 offset-3">
                 <form @submit.prevent="createCategory">
              <div class="form-group">
                <label for="">Category Name</label>
               <input type="text" v-model="categoryname" class="form-control" name="name" required="" placeholder="categoryname">
              </div>
                <div class="form-group">
               <button type="submit" class="btn btn-success mb-3">Create Category</button>
              </div>
            </form>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
data(){
  return {
    categoryname:'',
  }
},
methods:{
createCategory(){
  axios.post('/api/category',{name:this.categoryname}).then(response=>{
    console.log(response);
    this.$toast.success({
    title:'success',
    message:'Category Created successfully!!'
})
  })
}
}
}
</script>

<style>

</style>