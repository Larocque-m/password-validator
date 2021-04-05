let cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let notcap = 'abcdefghijklmnopqrstuvwxyz'
let numerics = '0123456789'
let characters = '"!@#$%^&?~"'

const validatePassword = (password) => {
  let hasLong = false
  let hasCaps = false
  let hasLower = false
  let hasNums = false
  let hasChar = false



  for (let i = 0; i < password.length; i++) {
    if (password.length >= 8) hasLong = true
    if (cap.includes(password[i])) hasCaps = true
    if (notcap.includes(password[i])) hasLower = true
    if (numerics.includes(password[i])) hasNums = true
    if (characters.includes(password[i])) hasChar = true
  }

  return hasLong && hasCaps && hasLower && hasNums && hasChar
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


