import useJwt from "@/auth/jwt/useJwt";

export const isUserLoggedIn = () => {
  return localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName);
};
