import { FetchError } from 'ofetch';
import type { Lista } from '~/interfaces/listas';

export function useListas() {
  const { $pinia } = useNuxtApp();
  const $q = useQuasar();
  const { token, data: authData, status: authStatus } = useAuth();
  const listasStore = useListasStore($pinia);
  const perfilStore = usePerfilStore($pinia);

  // const status = ref<'idle' | 'pending' | 'success' | 'error'>('idle');
  const {
    data,
    status,
    error,
    execute,
  } = useAsyncData<Lista[]>(
    'listas',
    () => $fetch('/api/listas', { headers: { Authorization: `Bearer ${perfilStore.token}` } }),
    { immediate: false },
  );

  async function fetchListas() {
    try {
      if (!perfilStore.token) {
        if (localStorage.getItem('zorrosFMSession')) {
          perfilStore.setToken(localStorage.getItem('zorrosFMSession') ?? undefined);
        } else {
          throw new Error('No existe token de sesión');
        }
      }

      await execute();

      if (!data.value || status.value === 'error') {
        if (error.value) {
          throw error.value;
        }

        throw new Error((data.value as unknown as { message: string | null }).message ?? 'Desconocido');
      }

      console.log('Listas data:', data.value);
      listasStore.setListas(data.value);
    } catch (err: any) {
      console.error('Error:', err);

      if ($q.notify) {
        $q.notify({
          message: err.message || err,
          color: 'danger',
        });
      }

      throw new FetchError(err);
    }
  }

  onMounted(() => {
    console.log('useAuth -', { token, authData, authStatus });
  });

  return {
    fetchListas,
    status,
    error,
  };
}
