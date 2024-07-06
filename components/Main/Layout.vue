<script setup lang="ts">
const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QBtn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <QToolbarTitle>
          <QAvatar class="q-mr-lg">
            <img src="/public/img/academia-zorros-logo_naranja.svg">
          </QAvatar>

          <slot name="title" />
        </QToolbarTitle>

        <div class="row q-ml-md-auto">
          <div class="col">
            <slot name="menus" />
          </div>
        </div>
      </QToolbar>
    </QHeader>

    <QDrawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered>
      <slot name="leftDrawer" />
    </QDrawer>

    <QPageContainer>
      <slot />
    </QPageContainer>
  </QLayout>
</template>
