const app = require('./config/server');

require('./app/routes/user')(app);

//iniciar server

app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
