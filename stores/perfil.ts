import { defineStore } from 'pinia';

export const usePerfilStore = defineStore('perfil', () => {
  const tokenActual = ref<string | null>(null);
  const token = computed(() => tokenActual.value);

  function setToken(tkn?: string) {
    if (tkn) {
      tokenActual.value = tkn;
    }
  }

  function clearSession() {
    tokenActual.value = null;
  }

  return {
    token,
    setToken,
    clearSession,
  };
});

