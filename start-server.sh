#!/bin/bash
cd /root/dot-escapist-web
npm run build
if [ $? -eq 0 ]; then
    npm run start
else
    echo "Build failed"
    exit 1
fi 