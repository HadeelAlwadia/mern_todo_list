import express from "express";
import {connectInDB} from './src/db/index.mjs'
import routes from "./src/routes/index.mjs";
import bodyParser from 'body-parser'
import cors from 'cors'
  //run Connect to MongoDB

connectInDB()
const app=express()
// Use bodyParser middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
 // Add this line to enable CORS for all routes
app.use(cors());

app.use('/todos',routes)
app.listen('3000',()=>{
    console.log(`server start on 3000`)
})








  








 










  

