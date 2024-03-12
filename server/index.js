import express from "express";
import mongoonse from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.routes.js";
dotenv.config();

mongoonse.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
});


const app = express();

app.listen(3000, () =>{
    console.log('Server is running on port 3000!!!');
}
);


app.use("/api/user", userRouter)