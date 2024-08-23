const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const UserSchema = new Scheme({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
