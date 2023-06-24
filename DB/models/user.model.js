import { model, Schema } from "mongoose";
import mongoose from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cemail: {
      type: String,
      default: false,
    },
    profilepic:{
      type:String,
      
    }
  },
  {
    timestamps: true, // Add timestamps option here
  }
);

export const Usermodel = mongoose.models.user || mongoose.model('user', userSchema);

