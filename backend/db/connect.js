import mongoose from "mongoose";


const connectDB = (mongoDBURL,PORT) => {
    mongoose.connect(mongoDBURL).then(()=> {
        console.log("MongoDB Connected!");
        app.listen(PORT, ()=> {
            console.log(`App is running on port ${PORT}`);
        })
    }).catch((err)=> {
        console.log(err);
    })
}

export default connectDB;