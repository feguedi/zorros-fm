<script lang="ts" setup>
import { useDarkMode } from '@/composables/useDarkMode';

useDarkMode();
</script>

<template>
  <ClientOnly>
    <div class="window-height fit row justify-center items-center">
      <div class="row fit justify-center content-center items-center">
        <slot />
      </div>
    </div>  
  </ClientOnly>
</template>
