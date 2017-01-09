# Labs

My small, experiment projects. Experiments, new frameworks, algorithms, interesting libraries.

Sandboxed playground.

# Deployment

Labs are deployed with [CircleCI](https://circleci.com)

Deployment configuration is available here: https://circleci.com/gh/jkulak/labs

# Live version

Check out the working versions at: http://labs.webascrazy.net/

# Development

1. Build the image
```
$ docker build -t jkulak/labs .
```

2. Run the image with mounted dev directory
```
docker run -v ~/Developer/labs/:/var/www/html/ -p 20202:80 --name labs_dev jkulak/labs
```

3. Debug

Debug
```
$ docker run --rm -ti -v ~/Developer/labs/:/var/www/html/ -p 20202:80 --name labs_dev jkulak/labs sh
```

Debug a running container
```
$ docker exec -ti labs_dev bash
```

Tailf the PHP logs
```
$ docker exec -ti labs_dev tailf /var/log/apache2/error.log
```

# Run locally

1. Build the image `$ docker build -t jkulak/labs .`
2. Runt the image `$ docker run -p 20202:80 --name labs_web jkulak/labs`
