import mongoose, { Mongoose } from "mongoose";

function initDB() {
  // if DB is connected then from line #9 code will not execute
  if (mongoose.connections[0].readyState) {
    console.log("DB ALREADY CONNECTED");
    return;
  }
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
  mongoose.connection.on("connected", () => {
    console.log("DB CONNECTED");
  });
  mongoose.connection.on("error", (err) => {
    console.log("DB GOT ERROR", err);
  });
}

export default initDB;
