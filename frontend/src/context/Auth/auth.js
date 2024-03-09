import React, { useEffect } from "react";
import { AuthContext } from "../AuthContext";

export const isAuthenticate = () => {
  const auth = React.useContext(AuthContext);
  if (auth.user) {
    return true;
  }

  return false;
};
