import mongoose from 'mongoose';

const DB_URI = `mongodb://localhost:27017/schooldb`;

const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

export const connectToDb = () => {
    mongoose.connect(DB_URI, options)
    const { connection } = mongoose;
    connection.once( 'open' , () => console.log('Connection stablished'));
    connection.on( 'error' , (err) => console.log('Something went wrong'));
    return connection;
  };