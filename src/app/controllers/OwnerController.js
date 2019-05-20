const Owner = require('../models/Owner')

class OwnerController {
  async index (req, res) {
    const owners = await Owner.paginate(null, {
      page: req.params.page || 1,
      limit: 20,
      populate: ['pets'],
      sort: '-createdAt'
    })

    return res.json(owners)
  }

  async show (req, res) {
    const owner = await Owner.findById(req.params.id).populate('pets')

    return res.json(owner)
  }

  async store (req, res) {
    console.log(req)
    const { filename: avatar } = req.file
    const owner = await Owner.create({ ...req.body, avatar })

    return res.json(owner)
  }

  async update (req, res) {
    const { filename: avatar } = req.file
    const owner = await Owner.findByIdAndUpdate(
      req.params.id,
      { ...req.body, avatar },
      {
        new: true
      }
    )

    return res.json(owner)
  }

  async destroy (req, res) {
    await Owner.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new OwnerController()
