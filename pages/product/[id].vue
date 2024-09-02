<script setup>
import { useProductStore } from "~/store/product";
const storeProduct = useProductStore();
const route = useRoute();

const productQuality = ref(0);

const product = storeProduct.getSelectedProduct;
const { rating, reviewCount, name, description, price, coverImage, type, stock, shipping } =
  product;
</script>

<template>
  <div class="product-details">
    <div class="grid my-2">
      <div class="col-12 md:col-6 sm:col-12">
        <ProductGallery :url="coverImage" :is-liked="true" />
      </div>
      <div class="col-12 md:col-6 sm:col-12">
        <h4 class="my-0 capitalize text-muted">{{ type }}</h4>
        <h2 class="my-2">{{ name }}</h2>
        <div class="review flex gap-4 my-2">
          <Rating v-model="rating" :stars="5" class="flex">
            <template #onicon>
              <i class="pi pi-star-fill" style="font-size: 1rem; color: var(--p-yellow-400)" />
            </template>
            <template #officon>
              <i class="pi pi-star" style="font-size: 1rem; color: var(--p-yellow-400)" />
            </template>
          </Rating>
          <b>{{ reviewCount }} reviews</b>
        </div>
        <div class="price font-semibold text-5xl my-3">
          {{ price }}
        </div>

        <div class="des mb-3">
          <h4 class="my-2">Description</h4>
          <p class="m-0">
            {{ description }}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed et nostrum iure non
            dolores cum laudantium? Minima, necessitatibus adipisci vel voluptate ipsum amet, velit
            aliquam fugiat veritatis commodi tempore!
          </p>
        </div>
        <div class="shipping">
          <div class="flex flex-wrap gap-2">
            <span class="text-sm font-bold">Availability : </span> <span>{{ stock }} in stock</span>
          </div>
          <p class="mb-3 font-bold text-sm">Shipping Options :</p>
          <div class="flex flex-wrap gap-1">
            <Tag
              :value="s"
              rounded
              v-for="s in shipping"
              :key="s"
              severity="info"
              size="small"
              class="text-xs"
            />
          </div>
        </div>
        <div class="call-to-action flex gap-4 my-4">
          <InputNumber
            v-model="productQuality"
            inputId="horizontal-buttons"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            :min="0"
            :max="30"
            fluid
            incrementIcon="pi pi-plus"
            decrementIcon="pi pi-minus"
          />
          <Button
            icon="pi pi-shopping-cart"
            label="Add to Cart"
            class="flex-auto md:flex-initial whitespace-nowrap w-full"
          />
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<style lang="scss" scoped></style>
