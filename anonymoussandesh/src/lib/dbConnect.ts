import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};
async function dbconnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to Databse");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Database is connected");
  } catch (error) {
    console.log("database connection unsuccesfull", error);
    process.exit(1);
  }
}
export default dbconnect;
