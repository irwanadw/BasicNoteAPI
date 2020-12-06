const jwt = require('jsonwebtoken') //make jsonwebtoken
// 👇 use environment variables to help jwt methods create a token
const JWT_SECRET = process.env.JWT_SECRET //password untuk akses Token
const JWT_EXPIRES = process.env.JWT_EXPIRES//masa berlaku Token

// 👇 function to create a token 
function signJwt(payload) { //payload =semua yang ada di body register
  // 👇 use jwt "sign" method by adding information that wants to be included in token, secret code to encode it, and how long the token lasts
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES }) //menandatangani token menggunakan method sign dgn 3 parameter. Payload, JWT_SECRET, JWT_EXPIRES
  return token
}
 
// 👇 function to break down token information dan menghandle error pada token
function parseJwt(token) {
  // 👇 due jwt "verify" method can make a error (as we can call it in future "throw an error")
  // we should implement try-catch to handle the error (as we can call it in future "catch the error")
  // to prevent the app from crashes and give a proper response
  try { //jalankan
    // 👇 verify the token & take the information inside token to result variable
    const result = jwt.verify(token, JWT_SECRET) //verifikasi token apakah ada atau tidak
    return result //kalo ada balikan hasilnya berupa result
  } catch (err) { //kalo tidak ada tangkap errornya
    // 👆 catch the error, the "err" parameter will contain information about what caused the error
    // 👇 log the error
    console.log(err); //munculkan errornya
    // 👇 return null, so we can use this function and add a condition if the token was wrong or expired
    return null //balikkan ke client berupa null
  }
}

// 👇 exports two function inside this file using "Object Property Value Shorthand", so any file that requires this file will recieves an object with two methods
module.exports = {
  signJwt,
  parseJwt
}