const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner',
      required: true
    }
  },
  {
    timestamps: true
  }
)

PetSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Pet', PetSchema)
