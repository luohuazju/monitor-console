
Debug and Develop

>yarn start

Build and Deploy

>yarn build

>yarn global add serve

>serve -s build

On Local NGINX

>sudo sbin/nginx

copy all static contents to /opt/nginx/html

Mock Server

>sudo npm install -g stubby 

>stubby -d mock_server/monitor.json -w -l 0.0.0.0 -s 9000