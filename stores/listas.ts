import type { Lista } from '~/interfaces/listas';

export const useListasStore = defineStore('listas', () => {
  const listasRef = ref<Lista[]>([]);
  const listas = computed(() => listasRef.value);

  function setListas(l: Lista[]) {
    if (Array.isArray(l) && l.length > 0) {
      listasRef.value = l;
    }
  }

  return {
    listas,
    setListas,
  };
});
