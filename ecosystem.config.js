module.exports = {
  apps: [{
    name: 'dot-escapist-web',
    script: './start-server.sh',
    cwd: "/root/dot-escapist-web",
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