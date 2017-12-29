# GaritaCenter v2

[![Build Status](https://travis-ci.org/garciadiazjaime/website-gcenter-v2.svg)](https://travis-ci.org/garciadiazjaime/website-gcenter-v2)

## Run project:
a) Install Dependencies

`yarn`

b) Start Server

`yarn dev`

By default server will run on http://localhost:3000


## Docker commands
docker build -t garciadiazjaime/website-gcenter-v2 .
docker run -d -p 49189:3000 -e 'PROXY_URL=http://api.garitacenter.com/' --name gcenter garciadiazjaime/website-gcenter-v2
docker push garciadiazjaime/website-gcenter-v2

NODE_ENV=production API_URL=http://api.garitacenter.com/ PROXY_URL=http://localhost:3000/api/ npm start
