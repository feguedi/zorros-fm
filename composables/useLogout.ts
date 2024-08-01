export function useLogout() {
  const { signOut } = useAuth();
  const { $pinia } = useNuxtApp();
  const $q = useQuasar();
  const perfilStore = usePerfilStore($pinia);

  const { data, status, error, execute } = useFetch('/api/auth/logout', {
    method: 'POST',
    immediate: false,
    server: true,
    headers: {
      'Content-Type': 'application/json',
    },
    onRequest(ctx) {
      console.log('ctx logout request:', ctx.request);
    },
    timeout: 1200,
  });

  async function fetchLogout() {
    try {
      await execute();
      perfilStore.clearSession();
      await signOut({ callbackUrl: '/auth/login' });
    } catch (error) {
      console.error('fetchLogin error -', error);

      if ($q.notify) {
        $q.notify({
          message: (error as any).message || error,
          color: 'danger',
        });
      }
    }
  }

  return {
    fetchLogout,
    data,
    status,
    error,
  };
}
