module.exports = {
  apps: [
    {
      name: 'zorros-fm-client',
      port: '3030',
      exec_mode: 'cluster',
      script: './.output/server/index.mjs',
    },
  ],
};
