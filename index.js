
const validatePassword = (password) => {
  let valid = true
  let invalid = false

  if (password === password.length >= 8) {
    return valid
  } else return invalid
}

validatePassword()

module.exports = validatePassword
