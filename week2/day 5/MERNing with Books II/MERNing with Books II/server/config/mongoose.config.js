import {connect} from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export default async function connectToDB() {
    try {
        await connect(process.env.MONGO_DB_URI);
        console.log("connected to DB");
    } catch (error) {
        console.log(error);
    }
}