const dbconnection = require('../../config/dbconnection');

module.exports = (app) => {
  const connection = dbconnection();

  app.get('/', (req, res) => {
    connection.query('select * from datos', (err, result) => {
      res.render('user/user', {
        user: result,
      });
    });
  });

  app.post('/user', (req, res) => {
    const { nombre, email } = req.body;
    connection.query(' INSERT INTO datos SET?', {
      nombre,
      email,
    }, (err, result) => {
      res.redirect('/');
    });
  });

  app.get('/eliminar/:id', (req, res) => {
    const { id } = req.params;
    connection.query(' DELETE FROM datos WHERE id =?', [id], (err, result) => {
      res.redirect('/');
    });
  });


};
