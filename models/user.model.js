import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password:{
    type : String,
    required:true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "mananger", "admin"],
    defualt: user,
  },
});

userSchema.pre("save", async (next) => {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(password, 10);
  next();
});

userSchema.methods.matchPassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("user", userSchema);
