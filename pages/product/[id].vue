<script setup>
import { useProductStore } from "~/store/product";
const storeProduct = useProductStore();
const route = useRoute();

const product = storeProduct.getSelectedProduct;
</script>

<template>
  <div>
    <ProductGallery :url="product.coverImage" />
    {{ product }}
  </div>
</template>

<style lang="scss" scoped></style>
