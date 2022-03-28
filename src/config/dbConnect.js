import mongoose from "mongoose"

mongoose.connect("mongodb+srv://plastina:<password>@alura.vzpsk.mongodb.net/alura-node");


let db = mongoose.connection;

export default db;