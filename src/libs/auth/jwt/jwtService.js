import jwtDefaultConfig from "./jwtDefaultConfig";

export default class JwtService {
  // Will be used by this service for making API calls
  axiosIns = null;

  // jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig };

  // For Refreshing Token
  isAlreadyFetchingAccessToken = false;

  // For Refreshing Token
  subscribers = [];

  // For Refreshing Token error handling
  subscribersErrors = [];
  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns;
    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

    // Request Interceptor
    this.axiosIns.interceptors.request.use(
      (config) => {
        
        // Get token from localStorage
        const accessToken = this.getToken();

        // If token is present add it to request's Authorization Header
        if (accessToken) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add request/response interceptor
    this.axiosIns.interceptors.response.use(
      (response) => response,
      (error) => {
        const { config, response } = error;
        const originalRequest = config;

        if (response && response.status === 401) {
          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true;
            this.refreshToken().then((r) => {
              this.isAlreadyFetchingAccessToken = false;
              if (r.data.Success) {
                // Update AccessToken in localStorage
                this.setToken(r.data.accessToken);
                this.setRefreshToken(r.data.refreshToken);

                this.onAccessTokenFetched(r.data.accessToken);
              } else {
                this.onAccessTokenFetchedError(r.data.Errors);
                localStorage.clear();
              }
            });
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken) => {
              // Make sure to assign accessToken according to your response.
              // Change Authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              resolve(this.axiosIns(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error);
      }
    );
  }

  onAccessTokenFetched(accessToken) {
    this.subscribers = this.subscribers.filter((callback) =>
      callback(accessToken)
    );
  }
  onAccessTokenFetchedError(error) {
    this.subscribersErrors = this.subscribersErrors.filter((callback) =>
      callback(error)
    );
  }
  addSubscriber(callback) {
    this.subscribers.push(callback);
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
  }

  setToken(value) {
    localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
  }

  setRefreshToken(value) {
    localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
  }

  login(...args) {
    return this.axiosIns.post(this.jwtConfig.loginEndpoint, ...args);
  }

  register(...args) {
    return this.axiosIns.post(this.jwtConfig.registerEndpoint, ...args);
  }

  refreshToken() {
    return this.axiosIns.post(this.jwtConfig.refreshEndpoint, {
      refreshToken: this.getRefreshToken(),
    });
  }
}
