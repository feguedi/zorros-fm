export default defineNuxtRouteMiddleware((to, from) => {
  const $q = useQuasar();
  const { $pinia } = useNuxtApp();
  const perfilStore = usePerfilStore($pinia);

  // Solo leer el token del localStorage si estamos en el cliente
  if (process.client) {
    const token = localStorage.getItem('zorrosFMSession');

    if (token) {
      perfilStore.setToken(token);
    }
  }

  // Evitar redirección continua durante el desarrollo
  if (process.env.NODE_ENV !== 'production' && perfilStore.token && (to.path === '/auth/login' || to.path === '/auth/recover')) {
    if (from.path === '/fm' || from.path === to.path) {
      return;
    }

    return navigateTo('/fm');
  }

  // Si el usuario no está autenticado y trata de acceder a una página protegida
  if (process.env.NODE_ENV !== 'production' && !perfilStore.token && to.path !== '/auth/login' && to.path !== '/auth/recover') {
    if (from.path === '/auth/login' || from.path === to.path) {
      return;
    }

    return navigateTo('/auth/login');
  }

  // No redirigir si ya está en la ruta objetivo correcta
  return true;
});
