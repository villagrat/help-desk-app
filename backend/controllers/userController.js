const registerUser = (req, res) => {
  res.send('Register User Route');
};

const loginUser = (req, res) => {
  res.send('Login User Route');
};

module.exports = {
  registerUser,
  loginUser,
};
