const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI="mongodb://localhost:27017/vishesh");
// remove this mongoose.connect and move the option object to the above mongoose.connect

const requestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    description: {
        type: String,
        require: true,
    },
    approved: {
      type: Boolean,
      default: false,
      require: true,
    }
  })

const Request = mongoose.model("Request", requestSchema)

module.exports = Request;