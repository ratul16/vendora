<script setup>
import { useProductStore } from "~/store/product";
const storeProduct = useProductStore();

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
  },
});

const router = useRouter();

const getProductDetails = (data) => {
  console.log("data", data);
  router.push({ name: "product-id", params: { id: data.id } });
  storeProduct.setProduct(data);
};
</script>

<template>
  <div class="shadow-2 product-card">
    <div class="cover" @click="getProductDetails(props.product)">
      <img
        class="block xl:block mx-auto w-full"
        :src="props.product.coverImage"
        :alt="props.product.name"
      />
      <div class="rating shadow-2">
        <span class="text-surface-900 font-medium text-sm">{{ props.product.rating }}</span>
        <i class="pi pi-star-fill" />
      </div>
      <div class="shipping"></div>
    </div>
    <!-- <h4 class="mt-0 mb-2">{{ props.product.name }}</h4>
    <small>{{ props.product.description }}</small> -->
    <div class="content-body">
      <div>
        <h4 class="font-medium my-0">{{ props.product.name }}</h4>
        <h2 class="font-semibold my-2">{{ props.product.price }}</h2>
      </div>
      <div class="button-group flex flex-row-reverse md:flex-row gap-2">
        <Button icon="pi pi-heart" outlined></Button>
        <Button
          icon="pi pi-shopping-cart"
          label="Buy Now"
          :disabled="props.product.stock === 0"
          class="flex-auto md:flex-initial whitespace-nowrap w-full"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  background-color: var(--p-dataview-content-background);
  border-radius: 5px;
  overflow: hidden;
  height: 100%;

  justify-content: space-between;

  .cover {
    position: relative;
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    img {
      transition: $transition;
    }
  }

  .content-body {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .rating {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 10px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    background-color: var(--p-dataview-content-background);

    i {
      color: var(--p-yellow-400);
    }
  }

  &:hover {
    img {
      scale: 1.5;
    }
  }
}
</style>
