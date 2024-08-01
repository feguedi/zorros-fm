import { useQuasar } from 'quasar';
import { usePerfilStore } from '~/stores/perfil';

interface Login {
  usuario: string;
  contrasenia: string;
}

interface LoginResponse {
  token: string;
  message: string;
  rol: string[];
  nuevo?: string;
}

export function useLogin() {
  const $q = useQuasar();
  const { signIn } = useAuth();
  const { $pinia } = useNuxtApp();
  const perfilStore = usePerfilStore($pinia);

  const usuario = ref<string>('');
  const contrasenia = ref<string>('');
  const body = ref<Record<string, string> | Login>({});
  const errorMessage = ref<any>(null);

  async function fetchLogin() {
    errorMessage.value = null;

    try {
      if (usuario.value.length === 0 || contrasenia.value.length === 0) {
        throw new Error('Credenciales no válidos');
      }

      body.value.usuario = usuario.value;
      body.value.contrasenia = contrasenia.value;

      const { token } = await $fetch<LoginResponse>(
        '/api/auth/login',
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(body.value),
        },
      );
      const res = await signIn(body.value, { callback: '/fm' });
      console.log('Respuesta:', res);

      perfilStore.setToken(token);
    } catch (error) {
      console.error('fetchLogin error -', error);

      if ($q.notify) {
        $q.notify({
          message: (error as any).message || error,
          color: 'danger',
        });
      }

      errorMessage.value = error;
    }
  }

  function resetValues() {
    errorMessage.value = null;
    usuario.value = '';
    contrasenia.value = '';
    body.value = {};
  }

  return {
    usuario,
    contrasenia,
    fetchLogin,
    resetValues,
    errorMessage,
  };
}
