<script lang="ts" setup>
const treeData = 2;
</script>

<template>
  <div>
    <ClientOnly>
      <MainLayout>
        <template #title>
          <slot name="title" />
        </template>
  
        <template #default>
          <slot />
        </template>

        <template #leftDrawer>
          <p>Drawer</p>
        </template>

        <template #menus>
          <MenuUser />
        </template>
      </MainLayout>
    </ClientOnly>
  </div>
</template>
