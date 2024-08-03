import type { H3Event } from 'h3';
import constants from '~/server/constants';

async function fetchProfile(headers: Record<string, string>) {
  const { api, url } = constants();

  try {
    const response = await $fetch(`${api}/perfil`, {
      baseURL: url.toString(),
      headers: {
        ...headers,
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });

    return response;
  } catch (error: any) {
    console.error('Error endpoint /api/perfil GET fetchPerfil:', error);
    const msgs: Record<number, string> = {
      400: 'Credenciales incorrectas',
      401: 'No autorizado',
      402: 'No se enviaron las credenciales',
      403: 'Prohibido',
      500: 'Error del servidor',
      503: 'Servidor no disponible',
    };

    console.log(
      '/api/manager/perfil -',
      JSON.stringify(
        {
          statusCode: error.statusCode || 500,
          message: msgs[error.statusCode] ?? 'Error',
          error,
        },
        null,
        2,
      ),
    );

    return {
      statusCode: error.statusCode || 500,
      message: msgs[error.statusCode] ?? 'Error',
      error,
    };
  }
}

export default defineEventHandler(async (event: H3Event) => {
  const headers = getHeaders(event) as Record<string, string>;

  return fetchProfile(headers);
});
