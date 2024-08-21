<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});

const { name, price, description, reviewCount, type, shipping } = props.product;
</script>

<template>
  <div class="shadow-2 p-2 product-card">
    <img
      class="block xl:block mx-auto w-full"
      :src="props.product.coverImage"
      :alt="props.product.name"
    />
    <!-- <h4 class="mt-0 mb-2">{{ props.product.name }}</h4>
    <small>{{ props.product.description }}</small> -->
    <div class="flex flex-row md:flex-col justify-between items-start gap-2">
      <div>
        <h4 class="font-medium my-2">{{ props.product.name }}</h4>
      </div>
      <div class="bg-surface-100 p-1" style="border-radius: 30px">
        <div
          class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
          style="
            border-radius: 30px;
            box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
          "
        >
          <span class="text-surface-900 font-medium text-sm">{{ props.product.rating }}</span>
          <i class="pi pi-star-fill text-yellow-500"></i>
        </div>
      </div>
    </div>
    <h4 class="text-xl font-semibold my-2">{{ props.product.price }}</h4>
    <div class="flex flex-row-reverse md:flex-row gap-2">
      <Button icon="pi pi-heart" outlined></Button>
      <Button
        icon="pi pi-shopping-cart"
        label="Buy Now"
        :disabled="props.product.stock === 0"
        class="flex-auto md:flex-initial whitespace-nowrap w-full"
      ></Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  border-radius: 5px;
  height: 100%;
}
</style>
