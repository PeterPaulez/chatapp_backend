## Recordatorio Importante

En flutter no se puede conectar contra socket 3, por tanto hay que hacer un downgrade, tienes que tener esta versión "socket.io": "^2.3.0"
npm uninstall socket.io
npm install socket.io@2.3.0

## Conectar a HEROKU

To access Heroku app bash by CLI:-
heroku login
heroku ps:exec --app=scoreboard-backend-dev
scoreboard-backend-dev is the app name