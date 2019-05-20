const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const OwnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    pets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
      }
    ]
  },
  {
    timestamps: true
  }
)

OwnerSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Owner', OwnerSchema)
