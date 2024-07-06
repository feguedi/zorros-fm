<script lang="ts" setup>
import { useRecover } from '~/composables/useRecover';

const { telefono, fetchRecover, resetValues } = useRecover();

definePageMeta({
  middleware: 'auth',
  layout: 'auth',
});

useHead({
  title: 'Recuperar contraseña | Zorros Football Academy',
});
</script>

<template>
  <div>
    <div class="q-mb-lg column">
      <QImg
        class="self-center"
        src="/img/academia-zorros-logo_bco.svg"
        loading="lazy"
        width="400px"
        spinner-color="white"
      />
    </div>

    <QForm
      @submit.prevent="fetchRecover"
      @reset="resetValues"
      class=""
    >
      <QInput
        v-model="telefono"
        filled
        autofocus
        spellcheck="false"
        autocomplete="off"
        label="Usuario"
        lazy-rules
        :rules="[(val: string) => val && val.length > 0 || 'El usuario no puede estar vacío']"
      />

      <div class="row justify-center content-around items-center">
        <QBtn label="Recuperar" type="submit" color="primary" />
        <QBtn label="Borrar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </QForm>
  </div>
</template>
