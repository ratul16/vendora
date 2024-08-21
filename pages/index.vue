<script setup>
const { products } = useProductList();
import { useGlobalStore } from "~/store/global";
const global = useGlobalStore();

const { data: product } = useFetch("/api/products/?num=50");
</script>

<template>
  <div class="home">
    <div class="grid my-4">
      <div class="col-12 md:col-3 sm:col-12">
        <ProductFilter />
      </div>
      <div class="col-12 md:col-9 sm:col-12">
        <!-- {{ product.data }} -->
        <ProductView :product-list="product.data" />
      </div>
    </div>
  </div>
</template>
