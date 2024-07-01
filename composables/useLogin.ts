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

      console.log('body:', JSON.stringify(body.value, null, 2));

      const res = await $fetch<LoginResponse>(
        '/api/auth/login',
        {
          method: 'POST',
          body,
        },
      );

      perfilStore.setToken(res.token);
    } catch (error) {
      console.error('fetchLogin error -', error);
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
