// const ModelDescriptor = require('./model_descriptor');
//
// exports.makeRoutes = function(app, models) {
//   // routes
//   app.get('/test', (req, res) => {
//       respondOk(res, { response: 'ok' });
//   });
//
//   app.get('/administraciones', (req, res) => {
//       models.Administracion.findAll().then(users => {
//           respondOk(res, {
//               users: users
//           });
//       }).catch(err => {
//           respondError(res, err)
//       })
//   });
//   app.post('/administraciones', (req, res) => {
//
//       const user = models.Administracion.build(req.body);
//       user.save().then(() => {
//           respondOk(res, user);
//       }).catch(err => {
//           respondError(res, err);
//       })
//   })
//   app.get('/administraciones/dsql', ModelDescriptor.describeSequelizeModel('Administracion', models))
//   app.get('/administraciones/dpg', ModelDescriptor.describePostgresModel('Administracion', models))
//
//   app.listen(PORT, function() {
//   	console.log(`test server listening on port ${ PORT }`);
//   });
// }
