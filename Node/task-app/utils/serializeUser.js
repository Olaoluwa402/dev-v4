export const serializeUser = (user) => {
  console.log(user, "user");
  const { firstName, lastName, email, role, ...rest } = user;
  return {
    firstName,
    lastName,
    email,
    role,
  };
};
