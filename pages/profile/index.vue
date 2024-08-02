<script lang="ts" setup>
const perfilStore = usePerfilStore();

useHead({
  title: 'Mis datos | Zorros Football Academy',
});

definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/auth/login',
  },
  layout: 'user-main',
});
</script>

<template>
  <div>
    {{ JSON.stringify(perfilStore.datos, null, 2) }}
  </div>
</template>
