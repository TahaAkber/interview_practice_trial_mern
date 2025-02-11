const mongoose = require("mongoose");

async function connectDB() {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://tahaakber25:lumia123@cluster0.lx4ry.mongodb.net/QFE-TEST?retryWrites=true&w=majority&appName=Cluster0"
    );
    return connection;
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
}
module.exports = { connectDB };
