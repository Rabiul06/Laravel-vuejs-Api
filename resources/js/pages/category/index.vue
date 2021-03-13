<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between alin-item-center">
                        <h5 class="mb-0">Product Category</h5>
                        
                        <router-link :to="{name:'Create'}" class="btn btn-primary">Create category</router-link>
                    </div>

                    <div class="card-body">
                        <div class="table">
                            <thead>
                                <tr>
                                    <th style="width:100px">Id</th>
                                    <th>Name</th>
                                    <th style="width:170px">Slug</th>
                                    <th >Action</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for = "category in categories" :key="category.id">
                                    <td style="width:100px">{{category.id}} </td>
                                    <td>{{category.name}}</td>
                                    <td style="width:170px">{{category.slug}}</td>
                                    <td>
                                        <router-link class="btn btn-primary btn-sm" :to="{name:'edit'} ">Edit</router-link>
                                        <a class="btn btn-danger btn-sm" href="#">Delete</a>
                                    </td>
                                    
                                  
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            categories: [],
        }
        },
        methods: {
           loadCategories(){
               axios.get('/api/category').then(response =>{
               this.categories=response.data;
               });  
           } 
        },
        mounted() {
           this.loadCategories();
        }
    }
</script>
