import jwt from "./jwt/jwt";

/**
 * @returns true if user is logged in and false otherwise
 */
export const isUserLoggedIn = () => {
  return localStorage.getItem(jwt.jwtConfig.storageTokenKeyName) === null
    ? false
    : true;
};
