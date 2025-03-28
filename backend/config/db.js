import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const connectionInstance = await connect(process.env.MONGODB_URI);
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
