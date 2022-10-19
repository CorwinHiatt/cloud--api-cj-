import functions from "firebase-functions"
import express from "express"
import{ createUser, getAllUsers, updateUser } from './src/users.js'

const app = express()
app.use(express.json())

app.post('/users', createUser)
app.get('/users', getAllUsers)
app.patch('/users/:uid' , updateUser)

export const api = functions.https.onRequest(app)


