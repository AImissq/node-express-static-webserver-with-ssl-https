# node-express-static-webserver-with-ssl-https
Node express ststic webserver with ssl https support

Simple solution when you need to run up a dev server with ssl

git clone https://github.com/AImissq/node-express-static-webserver-with-ssl-https.git

npm install

cd into your project directory and in the same directory as index.js run openssl req -nodes -new -x509 -keyout server.key -out server.cert -days 3700

Run node index.js

Navigate to https://127.0.0.1:3000

Agree to security exception

You are done!
