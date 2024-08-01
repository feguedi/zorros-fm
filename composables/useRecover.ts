export function useRecover() {
  const $q = useQuasar();
  const telefono = ref<string>('');

  async function fetchRecover() {
    try {
      // TODO: agregar implementación de recuperación de contraseña
      return true;
    } catch (error: any) {
      console.error('fetchRecover Error:', error);

      if ($q.notify) {
        $q.notify({ message: `Error ${error.message || 'en la solicitud de recuperación'}`, type: 'negative' });
      }
    }
  }

  function resetValues() {
    telefono.value = '';
  }

  return {
    telefono,
    fetchRecover,
    resetValues,
  };
}
