const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())
app.get('/hello', (req, res) => {
    console.log("came");
  res.json(req.apiGateway.event)
})