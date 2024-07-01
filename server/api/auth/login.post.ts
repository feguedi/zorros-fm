import { ref } from 'vue';
import { readBody, sendError, type H3Event } from 'h3';
import constants from '~/server/constants';

interface Credenciales {
  usuario: string;
  contrasenia: string;
}

async function fetchLogin(credenciales: Credenciales, event: H3Event) {
  const rawResponse = ref<any>(null);
  const { api, url } = constants();

  try {
    if (credenciales.usuario.length === 0 || credenciales.contrasenia.length === 0) {
      throw new Error('Credenciales mal enviadas');
    }

    const response = await $fetch(`${api}/auth/login`, {
      method: 'POST',
      body: {
        contrasenia: credenciales.contrasenia,
        usuario: credenciales.usuario,
      },
      baseURL: url.toString(),
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    });

    rawResponse.value = response;

    return response;
  } catch (error: any) {
    sendError(event, error);
  }
}

export default defineEventHandler(async (event) => {
  const credenciales = await readBody(event) as Credenciales;

  return await fetchLogin(credenciales, event);
});
