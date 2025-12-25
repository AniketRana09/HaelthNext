import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connection : Successfull");
  } catch (error) {
    console.log("Database Connection : Failed");
    process.exit(1);
  }
};

export default connectDB;
