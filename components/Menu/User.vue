<script lang="ts" setup>
const router = useRouter();
const { fetchLogout } = useLogout();

function toProfile() {
  router.push('/profile');
}
</script>

<template>
  <QBtn round flat anchor="bottom end" self="top end" icon="person">
    <QMenu>
      <QList dense style="min-width: 100px">
        <QItem clickable>
          <QItemSection @click="toProfile">
            Mis datos
          </QItemSection>
        </QItem>

        <QSeparator />

        <QItem clickable v-close-popup>
          <QItemSection @click="fetchLogout">
            Cerrar sesión
          </QItemSection>
        </QItem>
      </QList>
    </QMenu>
  </QBtn>
</template>
