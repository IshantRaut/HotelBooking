// const express = require('express')
import express from 'express'
import "dotenv/config"
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
import connectDB from './configs/db.js'
import clerkWebhooks from './controllers/clerkWebhooks.js'
connectDB();
const app = express()
app.use(cors())

//Middleware
app.use(express.json())
app.use(clerkMiddleware())

//API TO LSITEN CLERK WEBSHOOKS
app.use("/api/clerk",clerkWebhooks)


app.get('/', (req, res) => {
  res.send('Hello World!')
})
const PORT =  process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
