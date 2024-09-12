import mongoose from "mongoose";

const UserScheme = mongoose.Schema({
  todo:{
    type: String,
    required: true,
  },
  completed:{
    type: Boolean,
    default: false,
  }

});

export default mongoose.model("user", UserScheme);