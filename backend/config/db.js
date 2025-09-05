// import mongoose from "mongoose";

// export const  connectDB = async () =>{

//     await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected"));
   
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error);
    process.exit(1);
  }
};
