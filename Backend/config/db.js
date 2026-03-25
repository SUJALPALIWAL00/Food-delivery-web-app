import mongoose  from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://SujalPaliwal:S0000@cluster0.t9vk3nc.mongodb.net/food_delivery_app').then(()=>console.log("DB connected successfully")).catch((err)=>console.log(`DB connection error: ${err}`));
}
 