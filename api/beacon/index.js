const jsonBody = require('body/json');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With',
  );

  if(req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    jsonBody(req, res, (err, body) => {
      if (err) {
        res.statusCode = 500
        return res.end("NO U")
      }
  
      // I am an echo server
      res.setHeader("content-type", "application/json")
      res.end(JSON.stringify(body))
    })
  }
};
