export default function () {
  const config = useRuntimeConfig();

  const api: string = config.apiEndpoint;
  const url = new URL(config.apiBase);

  return {
    api,
    url,
  };
}