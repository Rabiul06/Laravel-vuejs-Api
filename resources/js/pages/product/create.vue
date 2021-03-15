<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <div class="card">
          <div class="card-header d-flex justify-content-between alin-item-center"> 
            <h5>Create product</h5>
            <a href="#" class="btn btn-primary ">Product List</a>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6 offset-3">
                 <form @submit.prevent="createProduct">
              <div class="form-group">
                <label for="">Product Title</label>
               <input type="text" v-model="productForm.title" class="form-control" name="title" required="" placeholder="product title">
              </div>
              <div class="form-group">
                <label for="">Product price</label>
               <input type="text" v-model="productForm.price" class="form-control" name="price" required="" placeholder="product price">
              </div>
             
              <div class="form-group">
                <label for="">Product image</label>
               <input type="file"  class="form-control-file" @change="onImageChange"  placeholder="categoryname">
              </div>
              <div class="form-group">
                <label for="">Description</label>
               <textarea  v-model="productForm.description" class="form-control" name="description" required="" placeholder="product description"></textarea>
              </div>
                <div class="form-group">
               <button type="submit" class="btn btn-success mb-3">Create product</button>
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
import { objectToFormData } from 'object-to-formdata'
export default {
data(){
  return {
 productForm: new Form({
    title:'',
    price: '',
    image: '',
    description: '',
     }),
 }

},
methods:{
createProduct(){
            this.productForm.post('/api/product', {
                transformRequest: [function (data, headers) {
                    return objectToFormData(data)
                }],
                onUploadProgress: e => {
                    // Do whatever you want with the progress event
                    console.log(e)
                }
            }).then(({ data })=>{
      consol.loge(data);
    // this.productForm.name='';
    // this.$toast.success({
    // title:'success',
    // message:'Product Created successfully!!'
//})
  })
},
 onImageChange(e){
            const file = e.target.files[0]
            // Do some client side validation...
            this.productForm.image = file
        }
}
}
</script>

<style>

</style>