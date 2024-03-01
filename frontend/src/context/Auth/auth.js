export const isAuthenticate = () => {
  if (
    localStorage.getItem("authToken") != "null" &&
    localStorage.getItem("email") != "null"
  ) {
    return true;
  }

  return false;
};
