import { FetchError } from 'ofetch';
import type { Perfil } from '~/interfaces/perfil';

export function usePerfil() {
  const perfilStore = usePerfilStore();
  const errorRef = ref<any>(null);
  const tokenRef = ref<string | null>(null);
  const statusRef = ref<'idle' | 'pending' | 'success' | 'error' | null>(null);

  const error = computed(() => errorRef.value);
  const status = computed(() => statusRef.value);

  const later = (delay: number, value: any) =>
    new Promise((resolve) => setTimeout(resolve, delay, value));

  async function fetchPerfil() {
    try {
      if (!perfilStore.token) {
        if (localStorage.getItem('zorrosFMSession')) {
          perfilStore.setToken(localStorage.getItem('zorrosFMSession') ?? undefined);
          tokenRef.value = localStorage.getItem('zorrosFMSession');
        } else {
          throw new Error('No existe token de sesión');
        }
      }

      const { data, error: fetchError, status: fetchStatus, execute } = useAsyncData<Perfil>(
        'perfil',
        () => $fetch('/api/profile', { headers: { Authorization: `Bearer ${perfilStore.token}` } }),
        { immediate: false },
      );

      await later(2000, null);
      await execute();

      if (data.value && data.value.id) {
        perfilStore.setDatos(data.value);
      }

      if (fetchStatus.value === 'error' || !!fetchError.value) {
        throw fetchError.value;
      }
    } catch (err) {
      throw new FetchError(err as any);
    }
  }

  onMounted(async () => {
    try {
      if (!perfilStore.datos) {
        await fetchPerfil();
      }
    } catch (err) {
      console.log('Error /profile:', err as any);
      console.log('Error fetchPerfil:', error.value);
    }
  });

  return {
    fetchPerfil,
    error,
    status,
  };
}
