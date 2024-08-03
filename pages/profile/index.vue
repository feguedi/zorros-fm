<script lang="ts" setup>
const perfilStore = usePerfilStore();
const { error, status } = usePerfil();

useHead({
  title: 'Mis datos | Zorros Football Academy',
});

definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/auth/login',
  },
  layout: false,
});
</script>

<template>
  <div>
    <NuxtLayout name="user-main">
      <template #title>Mis datos</template>

      <div
        class="overflow-hidden hide-scrollbar window-width"
        style="min-height: calc(100vh - 50px);"
      >
        <div
          class="row q-ma-lg-xl q-ma-lg vertical-middle"
          style="min-height: calc(100vh - 98px);"
        >
          <div v-if="perfilStore.datos" class="q-pa-md">
            {{ JSON.stringify(perfilStore.datos, null, 2) }}
          </div>
  
          <div
            v-else-if="!status || status === 'pending'"
            class="col flex flex-center"
          >
            <QSpinnerPie color="primary" size="6rem" />
          </div>

          <div v-else-if="error">
            {{ error }}
          </div>

          <div v-else>
            Error desconocido
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
