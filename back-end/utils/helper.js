const get_user_id = async (req) => {
  return req?.signedCookies?.user?.id || 0;
};

module.exports = {
  get_user_id,
};
