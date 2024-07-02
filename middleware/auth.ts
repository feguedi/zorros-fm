export default defineNuxtRouteMiddleware((to, from) => {
  const { $pinia } = useNuxtApp();
  const perfilStore = usePerfilStore($pinia);

  if (perfilStore.token) {
    if (to.path === '/auth/login') {
      return navigateTo(from.path);
    }

    return true;
  }

  return navigateTo('/auth/login');
});
