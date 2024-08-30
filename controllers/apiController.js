const getMessage = (req, res) => {
    res.status(200).send('Hello World! If you can see this you need to hit the API couple more times');
  };
  
  module.exports = {
    getMessage,
  };