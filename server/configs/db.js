import mongoose from 'mongoose';

const connectDB=async ()=>{
    try {
        mongoose.connection.on('connected', () => {
            console.log('MongoDB connection successful');
        });
        await mongoose.connect(`${process.env.MONGO_URI}/Hotel`, )
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;