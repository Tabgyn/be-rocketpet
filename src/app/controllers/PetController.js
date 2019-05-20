const Pet = require('../models/Pet')

class PetController {
  async index (req, res) {
    const pets = await Pet.paginate(null, {
      page: req.params.page || 1,
      limit: 20,
      populate: ['owner'],
      sort: '-createdAt'
    })

    return res.json(pets)
  }

  async show (req, res) {
    const pet = await Pet.findById(req.params.id).populate('owner')

    return res.json(pet)
  }

  async store (req, res) {
    const { filename: picture } = req.file
    const pet = await Pet.create({ ...req.body, owner: req.ownerId, picture })

    return res.json(pet)
  }

  async update (req, res) {
    const { filename: picture } = req.file
    const pet = await Pet.findByIdAndUpdate(
      req.params.id,
      { ...req.body, owner: req.ownerId, picture },
      {
        new: true
      }
    )

    return res.json(pet)
  }

  async destroy (req, res) {
    await Pet.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new PetController()
