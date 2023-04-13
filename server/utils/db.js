import * as mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        console.log(await mongoose.connect(process.env.DB_URL, {dbName: process.env.DB_NAME}))
        console.log("Sucessfully connected to the database!")
    } catch (e) {
        console.log("Failed to connect to the database :(")
    }
}

const closeDB = async () => {
    await mongoose.connection.close();
    console.log("Connection Closed.");
}

export {connectDB, closeDB}
