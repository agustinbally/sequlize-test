const _ = require('lodash');
const express = require('express');
const Sequelize = require('sequelize');
const BodyParser = require('body-parser');

const config = require('./config').get(process.env.NODE_ENV);
const getModels = require('./models');

const PORT = config.server.port;

const DB_TYPE = config.database.type;
const DB_HOST = config.database.host;
const DB_PORT = config.database.port;

const DB_NAME = 'test';
const DB_USER = '';
const DB_PASS = '';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_TYPE,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

const app = express();
const models = getModels(sequelize);

//require('./routes_administraciones.js').makeRoutes(app, getModels(sequelize));
function respondOk(res, body) {
    res.status(200).json(body);
};

function respondError(res, err) {
    res.status(500).json({
        error: err,
    });
};


function getModel(modelName){
  modelName = (modelName + "").toLowerCase();
  for(var model in models){
     if(models.hasOwnProperty(model) && modelName == (model+ "").toLowerCase()){
           return models[model];
      }
   }
}

function describeSequelizeModel(req, res, modelName) {
    const model = getModel(modelName);
    if (!model) {
        respondError('', new Error(`Invalid modelName: ${ modelName }`))
    }

    const attrs = _.reduce(model.rawAttributes, (result, attr, name) => {
        result[name] = {
            type: '' + attr.type,
        };
        return result;
    }, {});
    respondOk(res, attrs);

};

function describeSqlModel(req, res, modelName) {
    const model = getModel(modelName);
    if (!model) {
        respondError(res, new Error(`Invalid modelName: ${ modelName }`))
    }

    model.describe().then(desc => {
        respondOk(res, desc);
    }).catch(err => {
        respondError(res, err);
    })

};

app.use(BodyParser.json());

// routes
app.get('/test', (req, res) => {
    respondOk(res, { response: 'ok' });
});

app.get('/:entity/getAll', (req, res) => {
    const model = getModel(req.params.entity);
    model.findAll().then(administraciones => {
        respondOk(res, {
            administraciones: administraciones
        });
    }).catch(err => {
        respondError(res, err)
    })
});
app.post('/:entity/new', (req, res) => {
    const model = getModel(req.params.entity).build(req.body);
    model.save().then(() => {
        respondOk(res, model);
    }).catch(err => {
        respondError(res, err);
    })
});

app.get('/:entity/dsql', (req, res) => describeSequelizeModel(req, res, req.params.entity));
app.get('/:entity/dpg', (req, res) => describeSqlModel(req, res, req.params.entity));

app.listen(PORT, function() {
  console.log(`test server listening on port ${ PORT }`);
});
