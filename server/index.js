const express = require('express')
const userRouter = require('../routes/user.route.js')
const commoncodeRouter = require('../routes/commoncode.route.js')
const company_code_Router = require('../routes/company_code.route.js')
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


app.use('/commoncode',commoncodeRouter);
app.use('/users',userRouter);
app.use('/company_code',company_code_Router);

const port = 9242
app.get('/', (req, res) => {
  console.log('get / ');
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})