import express from 'express';
import "dotenv/config";
import cors from 'cors';

const app = express();

app.use(cors()); //Cors origin resource sharing

app.get('/',(req,res)=>{
    res.send('Hello World')
})
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);