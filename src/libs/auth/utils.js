import useJwt from "./jwt/useJwt";

/**
 * @returns true if user is logged in and false otherwise
 */
export const isUserLoggedIn = () => {
  return localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName) === null
    ? false
    : true;
};
