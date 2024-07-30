<script lang="ts" setup>
</script>

<template>
  <div>
    <ClientOnly>
      <MainLayout>
        <template #title>Inicio</template>
  
        <template #default>
          <slot />
        </template>
      </MainLayout>
    </ClientOnly>
  </div>
</template>
