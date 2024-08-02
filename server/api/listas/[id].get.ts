import type { H3Event } from 'h3';
import constants from '~/server/constants';

async function fetchListas(id: string, headers: Record<string, string>) {
  const { api, url } = constants();

  try {
    if (id.length === 0 || id === 'undefined' || id === 'null') {
      throw new Error('No se envió ID de lista');
    }

    const response = await $fetch(`${api}/manager/lista${id}`, {
      baseURL: url.toString(),
      headers: {
        ...headers,
        'content-type': 'application/json',
        accept: 'application/json',
      },
    });

    return response;
  } catch (error: any) {
    console.error(`Error endpoint /api/manager/lista/${id} GET fetchLista:`, error);
    const msgs: Record<number, string> = {
      400: 'Credenciales incorrectas',
      401: 'No autorizado',
      402: 'No se enviaron las credenciales',
      403: 'Prohibido',
      500: 'Error del servidor',
      503: 'Servidor no disponible',
    };

    console.log(
      `/api/manager/lista/${id} -`,
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
  const id = getRouterParam(event, 'id');
  const headers = getHeaders(event) as Record<string, string>;

  return fetchListas(String(id), headers);
});
