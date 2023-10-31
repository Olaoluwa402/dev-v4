export const serializeUser = (user) => {
  console.log(user, "user");
  const { _id, firstName, lastName, email, role, tasks, ...rest } = user;
  return {
    _id,
    firstName,
    lastName,
    email,
    role,
    tasks,
  };
};
