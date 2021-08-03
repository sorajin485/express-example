const express = require('express')

const app = express()

/**
 * bodyParser 모듈은 더 이상 사용하지 않음
 * express 4.16 이상부터 해당 모듈 지원
 */
//const bodyParser = require('body-parser')
//app.use(bodyParser.json)
//app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})