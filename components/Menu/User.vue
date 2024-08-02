<script lang="ts" setup>
const { fetchLogout } = useLogout();
</script>

<template>
  <QBtn round color="primary" icon="fa-user">
    <QMenu>
      <QList dense style="min-width: 100px">
        <QItem clickable>
          <QItemSection>
            <NuxtLink to="/profile">Mis datos</NuxtLink>
          </QItemSection>
        </QItem>

        <QSeparator />

        <QItem clickable v-close-popup>
          <QItemSection>
            <QBtn label="Cerrar sesión" @click="() => fetchLogout()" />
          </QItemSection>
        </QItem>
      </QList>
    </QMenu>
  </QBtn>
</template>
