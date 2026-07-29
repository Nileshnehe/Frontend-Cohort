import dotenv from "dotenv";
dotenv.config();
import app from "./src/app";
import connectDB from "./src/db/connect";

const PORT = process.env.PORT;

connectDB().then(() =>{
  app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
});


