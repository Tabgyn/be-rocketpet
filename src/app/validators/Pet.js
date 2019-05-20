const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
  body: {
    name: Joi.string().required(),
    owner: Joi.objectId().required()
  }
}
