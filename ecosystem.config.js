module.exports = {
  apps: [{
    name: 'dot-escapist-web',
    script: 'npm',
    args: "run start",
    cwd: "./",
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