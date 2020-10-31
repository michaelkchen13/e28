<template>
    <div>
        <h1>{{ products[id - 1].name }}</h1>

        <img
            class="product-thumb"
            :src="require('@/assets/images/products/' + id + '.jpg')"
        />
        <p class="product-description">{{ products[id - 1].description }}</p>
        <div class="product-price">${{ products[id - 1].price }}</div>
    </div>
</template>

<script>
import { products } from '@/products.js';

export default {
    name: '',
    props: ['id', 'product'],
    data: function() {
        return {
            products: products,
        }
    },
}
</script>

<style scoped>

</style>