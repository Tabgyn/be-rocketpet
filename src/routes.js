const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const controllers = require('./app/controllers')
const validators = require('./app/validators')

const routes = express.Router()

/**
 * Owners
 */
routes.get('/owners', handle(controllers.OwnerController.index))
routes.get('/owners/:id', handle(controllers.OwnerController.show))
routes.post(
  '/owners',
  // validate(validators.Owner),
  // upload.single('avatar'),
  handle(controllers.OwnerController.store)
)
routes.put(
  '/owners/:id',
  validate(validators.Owner),
  upload.single('avatar'),
  handle(controllers.OwnerController.update)
)
routes.delete('/owners/:id', handle(controllers.OwnerController.destroy))

/**
 * Pets
 */
routes.get('/pets', handle(controllers.PetController.index))
routes.get('/pets/:id', handle(controllers.PetController.show))
routes.post(
  '/pets',
  validate(validators.Pet),
  upload.single('picture'),
  handle(controllers.PetController.store)
)
routes.put(
  '/pets/:id',
  validate(validators.Pet),
  upload.single('picture'),
  handle(controllers.PetController.update)
)
routes.delete('/pets/:id', handle(controllers.PetController.destroy))

/**
 * Files
 */
routes.get('/files/:file', handle(controllers.FileController.show))

module.exports = routes
