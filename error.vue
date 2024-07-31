<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: '/' });

useHead({
  title: 'Error | Zorros Football Academy',
});
</script>

<template>
  <div>
    <ClientOnly>
      <QLayout>
        <QPageContainer class="window-width window-height">
          <QPage class="fit row items-center justify-center content-center">
            <div class="col-10 col-md-6 col-lg-8">
              <div class="column q-pa-none q-pa-lg-lg">
                <h2>{{ error?.statusCode }}</h2>

                <p>{{ error?.message || error }}</p>

                <QBtn color="primary" label="Limpiar errores" @click="handleError" />
              </div>
            </div>
          </QPage>
        </QPageContainer>
      </QLayout>
    </ClientOnly>
  </div>
</template>
