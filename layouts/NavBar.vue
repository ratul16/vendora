<template>
  <Menubar :model="items">
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
    </template>
    <template #end>
      <div class="flex align-items-center gap-2">
        <Button
          icon="pi pi-github"
          rounded
          raised
          size="small"
          severity="contrast"
          as="a"
          href="https://github.com/ratul16/vendora/"
          target="_blank"
          rel="noopener"
        />
        <Button
          :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
          rounded
          raised
          size="small"
          @click="toggleTheme()"
        />
      </div>
    </template>
  </Menubar>
</template>

<script setup>
const { isDark, toggleTheme } = useTheme();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-chart-pie",
    route: "/",
  },
  {
    label: "My Cart",
    icon: "pi pi-cart-plus",
    route: "/cart",
  },
  {
    label: "SignIn",
    icon: "pi pi-user",
  },
]);
</script>
