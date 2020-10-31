<!-- src/components/ShowProduct.vue -->
<template>
    <div class="product">
        <router-link v-bind:to="paths[links] + product.id">
            <div class="product-name">{{ product.name }}</div>
        </router-link>

        <router-view></router-view>

        <img
            class="product-thumb"
            :src="require('@/assets/images/products/' + product.id + '.jpg')"
        />

    </div>
</template>

<script>
export default {
    name: 'show-product',
    props: ['product'],
    data: function() {
        return {
            links: 'productPage',

            paths: {
                productPage: '/products/'
            },
        };
    }
};
</script>

<style scoped>
</style>