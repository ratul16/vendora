<script setup>
import { useGlobalStore } from "~/store/global";
const global = useGlobalStore();

const { data: product } = useFetch("/api/products/?num=50");
</script>

<template>
  <div class="home">
    <div class="grid my-4">
      <div class="col-12 md:col-3 sm:col-12 hide-on-mobile">
        <ProductFilter />
      </div>
      <div class="col-12 lg:col-9 md:col-12" v-if="product.data.length > 0">
        <ProductView :product-list="product.data" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include media-queries("tab") {
  .hide-on-mobile {
    display: none;
  }
}
</style>
