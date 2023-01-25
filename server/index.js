// Instance of the framework express
const express = require('express')
const app = express()

const db = require('./models')

// Routers
const postRouter = require('./routes/Post')
app.use('/posts', postRouter )

db.sequelize.sync().then(() => {
    app.listen(5001, () => {
        console.log('Server is running on port 5001')
    })
})


