import mongoose, { Schema, Document } from "mongoose";
import { boolean } from "zod";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verificationCode: string;
  verificationCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  message: Message[];
}
const userSchema: Schema<User> = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "Email is required",
    ],
  },
  password: {
    type: String,
    unique: true,
    required: [true, "Please enter a password"],
  },
  verificationCode: {
    type: String,
    unique: true,
    required: [true, "Please enter the verfication code"],
  },
  verificationCodeExpiry: {
    type: Date,
    required: [true, "Code is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: false,
  },
  message: [MessageSchema],
});
const UserModel= (mongoose.models.User as mongoose.Model<User>)|| (mongoose.model<User>("User",userSchema))

  export default UserModel; 