import mongoose from 'mongoose';

async function dbConnect() {
 let connectionUrl = process.env.MONGODB_URI;
 if (!connectionUrl) {
  throw new Error('MONGODB_URI is missing from env');
 }

 try {
  const db = await mongoose.connect(connectionUrl);
  console.log('Database connected');
 } catch (error) {
  console.log('Error connecting to database', error);
 }
}
export default dbConnect;
