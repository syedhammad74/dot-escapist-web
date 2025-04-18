module.exports = {
  apps: [{
    name: 'dot-escapist-web',
    script: 'server.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3005
    },
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
} 