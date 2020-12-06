const AWS = require('aws-sdk')
const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')
app.use(cors())

const postsTableName = process.env.POSTS_TABLE_NAME || 'staszkiewicz.ca-posts'
const dbRegion = process.env.DB_REGION || 'us-west-2'
const dynamodb = new AWS.DynamoDB({ region: dbRegion })
const db = new AWS.DynamoDB.DocumentClient({service: dynamodb})

app.get('/api/posts', async (req, res) => {
  let postResults = await db.scan({
      TableName: postsTableName
  }).promise()

  res.send(postResults.Items)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
