import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Loại bỏ deprecation warning cho Mongoose 7
    mongoose.set('strictQuery', false);

    await mongoose.connect(process.env.DB_URI);
    console.log('Database is connected...');
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
