<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <div class="card">
          <div class="card-header d-flex justify-content-between alin-item-center"> 
            <h5>Edit category -{{categoryForm.name}} </h5>
            <a href="#" class="btn btn-primary ">Category List</a>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6 offset-3">
                 <form @submit.prevent="updateCategory">
              <div class="form-group">
                <label for="">Category Name</label>
               <input type="text" v-model="categoryForm.name" class="form-control" name="name" placeholder="categoryname">
              </div>
                <div class="form-group">
               <button type="submit" class="btn btn-success mb-3">Update Category</button>
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
import { Form } from 'vform'
export default {
data(){
  return {
    categoryForm: new Form({
   name:'',
    }),
  }
},
methods:{
updateCategory(){
  this.categoryForm.put('/api/category/${id}').then(() =>{
  
    this.$toast.success({
    title:'success',
    message:'Category updated successfully!!'
})
  })
},
loadCategory(){
    let id = this.$route.params.id;
    axios.get('/api/category/${id}').then(response =>{
        this.categoryForm.name = response.data.name;
    });
}
},
mounted(){
    this.loadCategory();
}

}
</script>

<style>

</style>