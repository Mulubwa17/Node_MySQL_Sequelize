const express = require('express')
const cors = require('cors')


const app = express()

// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cors())

const PORT = process.env.PORT || 3000

const User = require('./src/routes/user.js')

app.use('/api/v1/user', User)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

module.exports = app