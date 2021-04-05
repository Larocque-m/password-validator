let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let notcap = 'abcdefghijklmnopqrstuvwxyz'
let numerics = '0123456789'
let characters = '"!@#$%^&?~"'

const validatePassword = (password) => {
  let result1 = false
  let result2 = false
  let result3 = false
  let result4 = false
  let result5 = false



  for (let i = 0; i < password.length; i++) {
    if (password.length >= 8) result1 = true
    if (cap.includes(password[i])) result2 = true
    if (notcap.includes(password[i])) result3 = true
    if (numerics.includes(password[i])) result4 = true
    if (characters.includes(password[i])) result5 = true
  }

  return result1 && result2 && result3 && result4 && result5
}

module.exports = validatePassword


//     if (notcap.indexOf(password[i]) >= 0) {
//       result = true
//     }
//     if (result === false) {
//       return false
//     }
//   }


//   for (let i = 0; i < password.length; i++) {
//     if (cap.indexOf(password[i]) >= 0) {
//       result = true
//     }
//     if (result === false) {
//       return false
//     }
//   }


//   for (let i = 0; i < password.length; i++) {
//     if (numerics.indexOf(password[i]) >= 0) {
//       result = true
//     }
//     if (result === false) {
//       return false
//     }
//   }


//   for (let i = 0; i < password.length; i++) {
//     if (characters.indexOf(password[i]) >= 0) {
//       result = true
//     }
//     if (result === false) {
//       return false
//     }
//   }


