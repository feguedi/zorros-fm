import { useQuasar } from 'quasar';

export function useDarkMode() {
  const $q = useQuasar();

  watch(() => $q.dark.isActive, (val) => {
    console.log(val ? 'On dark mode' : 'On light mode');
  });
}
