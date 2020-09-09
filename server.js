
const express = require('express')
const BP = require('body-parser')
const morgan = require('morgan')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
const app = express()

const userRoute = require('./routes/user')

require('./config/db')


app.use(morgan('dev'))
app.use(BP.json())
app.use(BP.urlencoded({ extended: false}))

app.use('/user', userRoute)


const port = 7524


app.listen(port, () => console.log(`server started at ${port}`))