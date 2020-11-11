<template>
    <div>
        <h2>Add a Product</h2>

        <div v-if="showConfirmationMessage">
            <h3 style="color:green;">Product Added!</h3>
        </div>

        <div id="inputs">
            <label for="name">Name<span style="color:red;">*</span>: </label>
            <input type="text" v-model="product.name" id="name" />
            <br>
            <label for="sku">SKU<span style="color:red;">* Miniumum 3characters</span>: </label>
            <input type="text" v-model="product.sku" id="sku" />
            <br>
            <label for="price">Price<span style="color:red;">*</span>: </label>
            <input type="text" v-model="product.price" id="price" />
            <br>
            <label for="available">Quantity available<span style="color:red;">*</span>: </label>
            <input type="text" v-model="product.available" id="available" />
            <br>
            <label for="weight">Weight (in lbs)<span style="color:red;">*</span>: </label>
            <input type="text" v-model="product.weight" id="weight" />
            <br>
            <label for="perishable" class="form-checkbox-label">
                <input
                    type="checkbox"
                    v-model="product.perishable"
                    id="perishable"
                />
                Perishable?
            </label>
            <br>
            <label for="description">Description</label>
            <textarea v-model="product.description" id="description"></textarea>
        </div>

        <button @click="addProduct">Add Product</button>

        <ul style="list-style-type:none; color:red;">
            <li v-for="error in errors" :key="error[0]">
                {{ error[0] }}
            </li>
        </ul>
        
    </div>
</template>

<script>
import { axios } from '@/app.js';
export default {
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            product: {
                name: 'Candy Heart Grapes',
                sku: 'candy-heart-grapes-' + new Date().valueOf(),
                price: 5.99,
                available: 25,
                weight: 2,
                perishable: true,
                description:
                    'Next time the kids are craving candy, hand them a bowl of seedless Candy Heart grapes. Plump, red, and bursting with juice, they taste a little like raspberry lemonade and are just as refreshing. So go ahead and eat your heart out!',
            },
        };
    },
    methods: {
        addProduct() {
            axios.post('/product', this.product).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                    console.log(response.data);
                } else {
                    this.$emit('update-products');
                    this.showConfirmationMessage = true;
                    this.product = {}
                }
            });
        },
    },
};
</script>

<style lang='scss' scoped>
#inputs {
    text-align: left;
}
</style>