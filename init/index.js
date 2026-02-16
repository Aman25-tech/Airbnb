require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require('../models/listing.js');
const dbUrl = process.env.ATLAS_DB_URL;

main().then(() => {
    console.log("Connected to MongoDB Atlas");
}).catch((err) => {
    console.error(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "68efeb2e911b56cabbbf0e35",
    }));
    await Listing.insertMany(initData.data);
    console.log("Database initialized with sample data");
};

initDB();