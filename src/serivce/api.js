import axios from "axios";
import BASE_URL from "./url.serice";
import { CRED_EXPIRATION_TIME, getAccessToken, getUserData, persistUserToken, removeUserToken } from "./cookie.service";
import { isEmpty } from "../user-managerment/module/helpers/isEmpty";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (!isEmpty(token)) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/api/User/Login" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        const uData = getUserData()

        try {
          const rs = await instance.post("/api/User/RefreshToken", {
                refreshTokenRequest: {
                    userId: uData?.userId,
                    role: uData?.role,
                    token: uData?.token,
                    refreshToken: uData?.refreshToken
                }
            });

          const { data } = rs;
          persistUserToken(data?.data, CRED_EXPIRATION_TIME)

          return instance(originalConfig);
        } catch (_error) {
            removeUserToken()
          return Promise.reject(_error);
        }
      }
    }
    removeUserToken()
    return Promise.reject(err);
  }
);

export default instance;