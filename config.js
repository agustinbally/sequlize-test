var config = {
  default: {
    server: {
      port: '3000'
    },
    database: {
      type: 'mysql',
      host: 'localhost',
      port: '3306'
    }
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}
