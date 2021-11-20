const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "aklsjfsolidflkajddeoalkdjfdgratciaskfdj"

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
   return res.status(401).json({message:"token required"})
  } 
  jwt.verify(token, secret, (error, decoded)=>{
    if (error) {
     return res.status(401).json({message:"token invalid"})
    } else {
     req.token = decoded
     next()
    }
  })
};
