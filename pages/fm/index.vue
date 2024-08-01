<script lang="ts" setup>
type team = 'lions' | 'sharks' | 'aguilasdoradas' | 'bufalos' | 'cachorros' | 'diablos' | 'jaguares' | 'vikingos' | 'rojos';
const equipos = ref<team[]>([
  'lions',
  'sharks',
  'aguilasdoradas',
  'bufalos',
  'cachorros',
  'rojos',
  'diablos',
  'jaguares',
  'vikingos',
]);

definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/auth/login',
  },
  layout: 'user-main',
});

useHead({
  title: 'Zorros Football Academy',
});
</script>

<template>
  <div class="row q-mx-xl q-mt-xl">

    <!--
    <template v-for="t in equipos" :key="t">
      <div class="col-4 bg-green-5">
        <IconLogo :team="t" />
      </div>
    </template>
    -->
  </div>
</template>
