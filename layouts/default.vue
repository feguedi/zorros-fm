<script lang="ts" setup>
</script>

<template>
  <div>
    <QLayout>
      <QPageContainer class="window-width window-height">
        <QPage class="fit row items-center justify-center content-center">
          <slot />
        </QPage>
      </QPageContainer>
    </QLayout>
  </div>
</template>
