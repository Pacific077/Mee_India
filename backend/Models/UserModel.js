import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      ownedBussinesses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bussiness' }],
      ratedBussinesses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bussiness' }],
      role: {type: String, default:"Consumer", enum: ["Admin", "Seller", "Consumer"]}
    },
    { timestamps: true }
  );

const User = mongoose.model("User", userSchema);

export default User;
