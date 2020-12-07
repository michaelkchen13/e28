<template>
    <div id="product-page">
        <div v-if="product">
            <div v-if="edit == false">
                <show-product
                    :product="product"
                    :includeDetails="true"
                ></show-product>
            </div>
        
            <div v-if="productNotFound">
                <p>Product {{ id }} not found.</p>

                <router-link v-bind:to="'/products'"
                    >Go to all products
                </router-link>
            </div>
        </div>

        <div>
            <edit-product 
                :edit=edit
                @update-edit="update"
                :product="product"
            ></edit-product>
        </div>

        <div v-if="favoriteStatus">
            <button @click="removeFavorite">Remove from Favorites</button>
        </div>
        <div v-else>
            <button @click="addFavorite">Add to Favorites</button>
        </div>

        <ul v-if="errors">
            <li class="error" v-for="(error, index) in errors" :key="index">
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue';
import EditProduct from '@/components/EditProduct.vue';
import { axios } from '@/app.js';

export default {
    name: '',
    props: ['id'],
    components: {
        'show-product': ShowProduct,
        'edit-product': EditProduct,
    },
    data() {
        return {
            edit: false,
            favoriteStatus: null,
            errors: null,
            favoriteID: null,
            userID: null,
        };
    },
    computed: {
        product() {
            return this.$store.getters.getProductById(this.id);
        },
        productNotFound() {
            return this.product == null;
        },
        products() {
            return this.$store.state.products;
        },
    },
    methods: {
        update(edit){
            this.edit = edit;
        },
        userAuth() {
            axios.post('/auth').then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.userID = response.data.user.id;
                }
            });
        },
        addFavorite() {
            var productFave = {product_id: this.id}
            axios.post('/favorite', productFave).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.favoriteStatus = true;
                    this.favoriteCheck()
                }
            });
        },
        removeFavorite() {
            axios.delete('/favorite/' + this.favoriteID).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.favoriteStatus = false;
                    this.favoriteCheck()
                }
            });
        },
        favoriteCheck() {
            axios.get('/favorite').then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    var favoriteArray = response.data.favorite
                    for (var i = 0; i < favoriteArray.length; i++) {
                        if (this.id == favoriteArray[i].product_id && this.userID == favoriteArray[i].user_id) {
                            this.favoriteStatus = true;
                            this.favoriteID = favoriteArray[i].id;
                        }
                    }
                }
            });
        }
    },
    mounted() {
        this.favoriteCheck();
        this.userAuth();
    },
};
</script>