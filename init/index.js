const mongoose = require("mongoose") ;
const Listing = require("../models/listing.js") ;
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().
then(()=>{
    console.log("connected to DB.") ;
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL) ;
};

const initDB = async () =>{
    await Listing.deleteMany({}) ;
    initData.data = initData.data.map((listing)=>{
        listing.owner = "668548ad22fd387858e2a9f2" ;
        return listing ;
    });
    await Listing.insertMany(initData.data) ;
    console.log("listing is inisilize.")
};

initDB();
