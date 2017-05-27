var Sequelize = require('sequelize');
//
// var sequelize = new Sequelize('mysql://localhost:3306/test', '', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Or you can simply use a connection uri
var sequelize = new Sequelize('mysql://localhost:3306/test');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  var User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

  // // force: true will drop the table if it already exists
  // User.sync({force: false}).then(function () {
  //   // Table created
  //   return User.create({
  //     firstName: 'Agustin',
  //     lastName: 'Bally'
  //   });
  // });

//
// User.findAll().then(function(users) {
//   console.log(users)
// })


function logUsers(users){
  console.log(users);
}

User.findAll({
  where: {
    firstName: 'agustin'
  }
}).then(logUsers)
