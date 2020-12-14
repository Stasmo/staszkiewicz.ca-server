const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())

const Post = require('./models/Post');

const mongoose = require('mongoose');
mongoose.connect('mongodb://stasmo:stasmo@mongo/staszkiewicz?authSource=admin', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.get('/api/posts', async (req, res) => {
    let posts = await Post.find().sort({ _id : -1 }).limit(10)

    res.send(posts)
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
});
