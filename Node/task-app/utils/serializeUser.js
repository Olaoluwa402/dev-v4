export const serializeUser = (user) => {
  console.log(user, "user");
  const { _id, firstName, lastName, email, role, ...rest } = user;
  return {
    _id,
    firstName,
    lastName,
    email,
    role,
  };
};
