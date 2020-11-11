<template>
    <div>
        <div v-if="edit == false">
            <button v-on:click=editTF()>Edit Product</button>
        </div>

        <div v-if="edit">
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

            <button v-on:click=editTF()>Save Changes</button>
        </div>

    </div>


</template>

<script>
import { axios } from '@/app.js';

export default {
    name: 'edit-product',
    props: ['product', 'edit'],
    data: function() {
        return {
        };
    },
    methods: {
        editTF() {
            let editStatus = this.edit;

            if (editStatus == true) {
                editStatus= false;
            } else {
                editStatus = true;
            }
            this.$emit("update-edit", editStatus);
        }
    },
    updateProduct() {
        axios.put('/product/' + this.product.id, this.product).then((response) => {
            if (response.data.errors) {
                this.errors = response.data.errors;
                console.log(response.data);
            } else {
                this.$emit('update-products');
                this.showConfirmationMessage = true;
                this.product = {}
            }
        });
    }
}
</script>

<style>

</style>