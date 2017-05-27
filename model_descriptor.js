// const respondOk = require('./http_responses').respondOk;
// const respondError = require('./http_responses').respondError;
// const express = require('express');
// const BodyParser = require('body-parser');
//
// module.exports = {
//   describeSequelizeModel: function(models, modelName) {
//       const model = models[modelName];
//       if (!model) {
//           respondError('', new Error(`Invalid modelName: ${ modelName }`))
//       }
//       return (req, res) => {
//           const attrs = _.reduce(model.rawAttributes, (result, attr, name) => {
//               result[name] = {
//                   type: '' + attr.type,
//               };
//               return result;
//           }, {});
//           respondOk(res, attrs);
//       }
//   },
//
//   describePostgresModel: function(models, modelName) {
//       const model = models[modelName];
//       if (!model) {
//           respondError(res, new Error(`Invalid modelName: ${ modelName }`))
//       }
//       return (req, res) => {
//           model.describe().then(desc => {
//               respondOk(res, desc);
//           }).catch(err => {
//               respondError(res, err);
//           })
//       }
//   }
//
// }
