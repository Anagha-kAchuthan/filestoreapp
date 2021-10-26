const db = require('./db')
users = {
  1000: { uid: 1000, uname: "Aahil", pswd: "userone" },
  1001: { uid: 1001, uname: "Bahit", pswd: "usertwo"},
  1002: { uid: 1002, uname: "Cahit", pswd: "userthree" },
  1003: { uid: 1003, uname: "Dahit", pswd: "userfour" }
}
// adminlogin = {
//   111: { aid: 111,  pswd: "admin" }
  
// }


const register = (uid, uname, pswd) => {

  return db.User.findOne({ uid })
    .then(user => {
       console.log(user)
      if (user) {
        return {
          statusCode: 422,
          status: false,
          message: "User already exist... Please Log In"
        }
      }
      else {
        const newUser = new db.User({
          uid,
          uname,
          pswd,
          
        })
        newUser.save()
        return {
          statusCode: 200,
          status: true,
          message: "Sucessfully Registered"
        }
      }
    })
}

function login(req, uid, pswd) {

  return db.User.findOne({
    uid,
    pswd: pswd
  })
    .then(user => {
      if (user) {
        req.session.currentAcc = uid
        return {
          statusCode: 200,
          status: true,
          message: "sucessfully login"
        }
      }
      return {
        statusCode: 422,
        status: false,
        message: "invalid Account details"
      }
    })
}

// const adminLogin = (req, aid, pswd) => {

//   return db.User.findOne({
//      aid,
//     pswd: pswd
//   })
//     .then(user => {
//       if (user) {
//         req.session.currentAcc = aid
//         return {
//           statusCode: 200,
//           status: true,
//           message: "sucessfully login"
//         }
//       }
//       return {
//         statusCode: 422,
//         status: false,
//         message: "invalid Account details"
//       }
//     })
// }

module.exports = {
  register,
  login
  // adminLogin
  
}