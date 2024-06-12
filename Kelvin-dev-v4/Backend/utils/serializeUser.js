export const serializeUser = (user) => {
  const { _id, firstName, lastName, email, role, ...rest } = user;
  return {
    _id,
    firstName,
    lastName,
    email,
    role,
  };
};
