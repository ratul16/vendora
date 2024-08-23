<script setup>
const props = defineProps({
  productList: {
    type: Object,
    default: () => [],
  },
});

const layout = ref("grid");
const options = ref(["list", "grid"]);
</script>

<template>
  <DataView
    :value="productList"
    :layout="layout"
    :dataKey="`${productList.length}`"
    paginator
    :rows="layout === 'list' ? 10 : 9"
  >
    <template #header>
      <div class="flex justify-content-end">
        <SelectButton v-model="layout" :options="options" :allowEmpty="false">
          <template #option="{ option }">
            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
          </template>
        </SelectButton>
      </div>
    </template>

    <template #list="slotProps">
      <div class="product-list">
        <div v-for="(item, index) in slotProps.items" :key="index">
          <ProductCard :product="item" />
        </div>
      </div>
    </template>

    <template #grid="slotProps">
      <div class="grid">
        <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4">
          <ProductCard :product="item" />
        </div>
      </div>
    </template>
  </DataView>
</template>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  :deep(.product-card) {
    display: flex;
    justify-content: flex-start;
    .cover {
      width: 340px;
      img {
        width: 100%;
      }
    }
    .rating {
      left: 10px;
      right: auto;
    }
    .content-body {
      width: 100%;
      justify-content: space-between;
    }
  }
  @include media-queries("mobile") {
    :deep(.product-card) {
      flex-direction: column;
      .cover {
        width: 100%;
      }
    }
  }
}
:deep(.p-dataview-header) {
  // background-color: $background-color;
  box-shadow: 0 0.5rem 1rem rgba(#333, 0.1);
  padding: 10px;
  margin-bottom: 18px;
  border: none;
  border-radius: 5px;
  // border-color: $theme-color;
}

:deep(.p-dataview-content) {
  background-color: transparent;
  margin-bottom: 14px;
}

:deep(.p-togglebutton) {
  // background-color: $foreground-color;
  // border-color: $foreground-color;
  &.p-togglebutton-checked::before {
    // background-color: $background-color;
  }
  &.p-togglebutton {
    padding: 0.75rem;
    &:hover {
      // background-color: $background-color;
    }
  }
  &.p-togglebutton-checked {
    color: $theme-color;
  }
}
</style>
