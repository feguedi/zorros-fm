<script lang="ts" setup>
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
  <div></div>
</template>
