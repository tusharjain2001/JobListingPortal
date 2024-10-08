const sentToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  const time =
    Date.now() + parseInt(process.env.COOKIE_EXPIRE, 10) * 24 * 60 * 60 * 1000;
  const options = {
    expires: new Date(time),
    httpOnly: true,
  };


  

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sentToken;
