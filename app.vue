<script lang="ts" setup>
const { $pinia } = useNuxtApp();

usePerfilStore($pinia);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
