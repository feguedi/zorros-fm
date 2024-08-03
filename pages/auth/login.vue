<script lang="ts" setup>
import { useLogin } from '@/composables/useLogin';

definePageMeta({
  layout: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/fm',
  },
});

useHead({
  title: 'Entrar | Zorros Football Academy',
});

const { usuario, contrasenia, fetchLogin, resetValues } = useLogin();
</script>

<template>
  <div class="q-gutter-xl col-12 col-sm-9 col-md-6">
    <div class="q-mb-lg column">
      <QImg
        class="self-center fit"
        src="/img/academia-zorros-logo_bco.svg"
        loading="lazy"
        spinner-color="white"
      />
    </div>

    <QForm
      @submit.prevent="fetchLogin"
      @reset="resetValues"
      class=""
    >
      <QInput
        v-model="usuario"
        filled
        autofocus
        spellcheck="false"
        autocomplete="off"
        label="Usuario"
        lazy-rules
        :rules="[(val: string) => val && val.length > 0 || 'El usuario no puede estar vacío']"
      />

      <QInput
        v-model="contrasenia"
        filled
        spellcheck="false"
        autocomplete="off"
        type="password"
        label="Contraseña"
        lazy-rules
        :rules="[(val: string) => val && val.length > 0 || 'La contraseña no puede estar vacía']"
      />

      <div class="row justify-center content-around items-center">
        <QBtn label="Entrar" type="submit" color="primary" />
        <QBtn label="Borrar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </QForm>
  </div>
</template>
