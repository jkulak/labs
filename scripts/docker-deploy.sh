#!/usr/bin/env bash

docker push jkulak/labs

ssh -oStrictHostKeyChecking=no deploy@$DEPLOY_HOST << EOF

    docker pull jkulak/labs:latest
    docker stop labs-web || true
    docker rm labs-web || true
    docker rmi jkulak/labs:current || true
    docker tag jkulak/labs:latest jkulak/labs:current
    docker run -d --restart always --name labs-web -p 20202:80 jkulak/labs:current
EOF
