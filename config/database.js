import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect("")
    .then(() => {
      console.log("db server has connected");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export default connectDB