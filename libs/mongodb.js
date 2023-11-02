import mongoose from "mongoose";
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to mongodb")
    } catch (error) {
        console.error(error)
    }
}
export default connectMongoDB