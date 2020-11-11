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
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue';
import EditProduct from '@/components/EditProduct.vue';

export default {
    name: '',
    props: ['id', 'products'],
    components: {
        'show-product': ShowProduct,
        'edit-product': EditProduct,
    },
    data() {
        return {
            edit: false,
        };
    },
    computed: {
        product() {
            return this.products.filter((product) => {
                return product.id == this.id;
            }, this.id)[0];
        },
        productNotFound() {
            return this.product == null;
        },
    },
    methods: {
        update(edit){
            this.edit = edit;
        }
    }
};
</script>