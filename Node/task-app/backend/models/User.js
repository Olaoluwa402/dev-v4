import mongoose from "mongoose";

// user fields: id, role (admin, default,supervisor), firsName, lastName, email,phoneNumber, userCode
// task fields: id userId(reference to user model - one => many), title, desc, status
const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "default", "supervisor"],
      default: "default",
    },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    userCode: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    tasks: [{ type: mongoose.Schema.ObjectId }],
  },
  { timestamp: true }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
