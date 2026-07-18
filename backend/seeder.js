const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const Provider = require("./models/Provider");
const providers = require("./data/providers");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Purana data delete karega
    await Provider.deleteMany();

    // Naya data insert karega
    await Provider.insertMany(providers);

    console.log("Providers Imported Successfully ✅");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();