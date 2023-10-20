import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { NextFunction } from "express";
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const userSchema: Schema<
  IUser & { matchPassword: (enteredPassword: string) => Promise<boolean> }
> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next: NextFunction) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

const User: Model<
  IUser & { matchPassword: (enteredPassword: string) => Promise<boolean> }
> = mongoose.model<
  IUser & { matchPassword: (enteredPassword: string) => Promise<boolean> }
>("User", userSchema);
export default User;
// const User = mongoose.model<
//   IUser & { matchPassword: (enteredPassword: string) => Promise<boolean> }
// >("User", userSchema);
// export default User;
