<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <div class="card">
          <div class="card-header d-flex justify-content-between alin-item-center"> 
            <h5>Edit product</h5>
            <a href="#" class="btn btn-primary ">Product List</a>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6 offset-3">
                 <form @submit.prevent="updateProduct">
              <div class="form-group">
                <label for="">Product Title</label>
               <input type="text" v-model="productForm.title" class="form-control" name="title" required="" placeholder="product title">
              </div>
              <div class="form-group">
                <label for="">Product price</label>
               <input type="text" v-model="productForm.price" class="form-control" name="price" required="" placeholder="product price">
              </div>
             <div class="row">
               <div class="col-8">
                 <div class="form-group">
                <label for="">Product image</label>
               <input type="file"  class="form-control-file" @change="onImageChange"   placeholder="categoryname">
              </div>
               </div>
               <div class="col-4">
                 <div style="width:100%; max-height:150px; overfloe:hidden">
                   <img :src="image" alt="" class="img-fluid">
                 </div>
               </div>
             </div>
              
              <div class="form-group">
                <label for="">Description</label>
               <textarea  v-model="productForm.description" class="form-control" name="description" required="" placeholder="product description"></textarea>
              </div>
                <div class="form-group">
               <button type="submit" class="btn btn-success mb-3">Update product</button>
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
                title: '',
                price: '',
                image: '',
                description: '',
                _method: 'put',
            }),
            image:'',
        }
    },
     methods: {
       loadProduct(){
       let id = this.$route.params.id;
            
            axios.get(`/api/product/${id}/edit`).then(response => {
                let product = response.data;
               this.productForm.title = product.title;
               this.productForm.price = product.price;
               this.productForm.description = product.description;
               this.image = product.image;
               
            });
       },
        updateProduct(){
           let id = this.$route.params.id;
            this.productForm.post('/api/product/'+id, {
                transformRequest: [function (data, headers) {
                    return objectToFormData(data)
                }],
                onUploadProgress: e => {
                    // Do whatever you want with the progress event
                    console.log(e)
                }
            }).then(({ data }) => {
                this.productForm.title = '';
                this.productForm.price = '';
                this.productForm.image = '';
                this.productForm.description = '';
                this.$toast.success({
                    title:'Success!',
                    message:'Product Uploaded successfully.'
                });
            })
        },
        onImageChange(e){
            const file = e.target.files[0]
            // Do some client side validation...
            this.productForm.image = file
        }
    },
    mounted(){
       this.loadProduct();
    }
}
</script>
<style>

</style>