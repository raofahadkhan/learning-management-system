require("dotenv").config({ path: "./.env.local" });
import { app } from "./app";
import connectDB from "./utils/db";

app.listen(process.env.PORT, () => {
  console.log(`Server Started at PORT ==> ${process.env.PORT}`);
  connectDB();
});
