import { defineStore } from 'pinia';
import type { Perfil } from '~/interfaces/perfil';

export const usePerfilStore = defineStore('perfil', () => {
  const tokenActual = ref<string | null>(null);
  const datosRef = ref<Perfil | null>(null);
  const token = computed(() => tokenActual.value);
  const datos = computed(() => datosRef.value);

  function setToken(tkn?: string) {
    if (tkn && tkn.length > 0) {
      tokenActual.value = tkn;

      if (import.meta.client) {
        localStorage.setItem('zorrosFMSession', tkn);
      }
    }
  }

  function clearSession() {
    tokenActual.value = null;
    datosRef.value = null;

    if (import.meta.client) {
      localStorage.removeItem('zorrosFMSession');
    }
  }

  return {
    token,
    setToken,
    clearSession,
    datos,
  };
});
