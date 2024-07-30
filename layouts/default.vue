<script lang="ts" setup>
</script>

<template>
  <div>
    <ClientOnly>
      <QLayout view="hHh lpR fFf">
        <QPageContainer class="window-width window-height">
          <QPage class="fit row items-center justify-center content-center">
            <slot />
          </QPage>
        </QPageContainer>
      </QLayout>
    </ClientOnly>
  </div>
</template>
