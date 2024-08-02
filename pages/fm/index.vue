<script lang="ts" setup>
const { fetchListas } = useListas();
const errorMessage = ref<string | null>(null);

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

useHead({
  title: 'Dashboard | Zorros Football Academy',
});

definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/auth/login',
  },
  layout: 'user-main',
});

onMounted(async () => {
  try {
    await fetchListas();
  } catch (err: any) {
    errorMessage.value = err.message || String(err);
    throw new Error('Error fm:', err);
  }
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

    <h2 v-if="errorMessage">
      {{ errorMessage }}
    </h2>
  </div>
</template>
