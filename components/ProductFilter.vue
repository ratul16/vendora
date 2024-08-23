<script setup>
const { brands, specifications } = useFilterMixin();

const selectedBrands = ref([]);
const selectedProcessor = ref([]);
const selectedRams = ref([]);
const selectedStorages = ref([]);
const rating = ref(null);
</script>

<template>
  <div class="filter shadow-2">
    <div class="header flex justify-content-between">
      <p>Filters</p>
      <a class="reset" href="#"> <i class="pi pi-times"></i> </a>
    </div>
    <hr />
    <div class="filter-option">
      <p>Brands</p>
      <div class="overflow-y-scroll max-h-16rem">
        <div v-for="brand of brands" :key="brand.id" class="flex align-items-center gap-2 mb-2">
          <Checkbox v-model="selectedBrands" :inputId="brand.name" name="brand" :value="brand" />
          <label :for="brand.name" class="cursor-pointer">{{ brand.name }}</label>
        </div>
      </div>
    </div>
    <hr />
    <div class="filter-option">
      <p>Ram Size</p>
      <div
        v-for="item of specifications['ram']"
        :key="item.id"
        class="flex align-items-center gap-2 mb-2"
      >
        <Checkbox v-model="selectedRams" :inputId="item.name" name="brand" :value="item" />
        <label :for="item.name" class="cursor-pointer">{{ item.name }}</label>
      </div>
    </div>
    <hr />
    <div class="filter-option">
      <p>Storages</p>
      <div
        v-for="item of specifications['storage']"
        :key="item.id"
        class="flex align-items-center gap-2 mb-2"
      >
        <Checkbox v-model="selectedStorages" :inputId="item.name" name="brand" :value="item" />
        <label :for="item.name" class="cursor-pointer">{{ item.name }}</label>
      </div>
    </div>
    <hr />
    <div class="filter-option">
      <p>Shipping</p>
      <div
        v-for="item of specifications['shipping']"
        :key="item.id"
        class="flex align-items-center gap-2 mb-2"
      >
        <Checkbox v-model="selectedProcessor" :inputId="item.name" name="brand" :value="item" />
        <label :for="item.name" class="cursor-pointer">{{ item.name }}</label>
      </div>
    </div>
    <hr />
    <div class="filter-option">
      <p class="my-2">Rating</p>
      <Rating v-model="rating" :stars="5">
        <template #onicon>
          <i class="pi pi-star-fill" style="font-size: 1.65rem; color: var(--p-yellow-400)" />
        </template>
        <template #officon>
          <i class="pi pi-star" style="font-size: 1.65rem; color: var(--p-yellow-400)" />
        </template>
      </Rating>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  background-color: var(--p-dataview-content-background);
  padding: 15px;
  border-radius: 5px;
  .header,
  .filter-option {
    margin-bottom: 10px;
    p {
      margin: 0 0 10px 0;
      color: var(--p-primary-color);
      font-size: 14px;
      font-weight: 400;
      text-transform: capitalize;
    }
  }

  .header p {
    font-size: 16px;
    font-weight: 600;
  }

  .reset {
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: var(--p-red-500);
    cursor: pointer;
    &:hover {
      color: var(--p-red-800);
    }
    i {
      vertical-align: middle;
    }
  }
}

// :deep() {
//   color: red;
// }

// .form-check-label {
//   cursor: pointer;
//   font-size: 14px;
// }
// .form-check-input:checked {
//   background-color: var(--p-primary-color);
//   border-color: var(--p-primary-color);
// }

// .form-check-input:checked + .form-check-label {
//   color: var(--p-primary-color);
// }

// .form-check-input:focus {
//   box-shadow: 0 0 0 0.2rem rgba(var(--p-primary-color), 0.25);
// }
</style>
