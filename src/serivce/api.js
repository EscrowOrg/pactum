import axios from "axios";
import mem from "mem";
import { isEmpty } from "../user-managerment/module/helpers/isEmpty";
import { CRED_EXPIRATION_TIME, getAccessToken, getUserData, persistUserToken, removeUserToken } from "./cookie.service";
import BASE_URL from "./url.serice";


// axios instance for protected routes
export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
});

// refresh token function
const refreshTokenFn = async () => {
    const uData = getUserData()

    try {
        const response = await instance.post("/api/User/RefreshToken", {
            refreshTokenRequest: {
                userId: uData?.userId,
                role: uData?.role,
                token: uData?.token,
                refreshToken: uData?.refreshToken
            }
        });
        const { data } = response;
        if (isEmpty(data)) {
            removeUserToken()
        }

        // watch
        console.log("Axios watch: ",data?.data)
        persistUserToken(data?.data, CRED_EXPIRATION_TIME)
        
        return data;
    } catch (error) {
        removeUserToken()
    }
};

// memoising refresh token function
const maxAge = 10000;
export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});

// axios intercepors objects: set authorization token
instance.interceptors.request.use(
    async (config) => {
        const token = getAccessToken()
  
      if (!isEmpty(token)) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${token}`,
        };
      }
      return config;
    },
    (error) => Promise.reject(error)
);

// axios interceptors objects: refresh token service
// instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (err) => {
//     const originalConfig = err.config;

//     if (originalConfig.url !== "/api/User/Login" && err.response) {
//       // Access Token was expired
//       if (err.response.status === 401 && !originalConfig._retry) {
//         originalConfig._retry = true;
//         const uData = getUserData()

//         try {
//           const rs = await instance.post("/api/User/RefreshToken", {
//                 refreshTokenRequest: {
//                     userId: uData?.userId,
//                     role: uData?.role,
//                     token: uData?.token,
//                     refreshToken: uData?.refreshToken
//                 }
//             });

//           const { data } = rs;
//           persistUserToken(data?.data, CRED_EXPIRATION_TIME)

//           return instance(originalConfig);
//         } catch (_error) {
//             removeUserToken()
//           return Promise.reject(_error);
//         }
//       }
//     }
//     removeUserToken()
//     return Promise.reject(err);
//   }
// );
instance.interceptors.response.use(
    (response) => response,
    async (error) => {

      const config = error?.config;
  
      if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

          const result = await memoizedRefreshToken();

          if (!isEmpty(result?.data)) {
              config.headers = {
              ...config.headers,
              authorization: `Bearer ${result?.data?.token}`,
              };
          }

          return axios(config);
      } else if(error?.response?.status === 401 && config?.sent) {
        removeUserToken()
      }
      return Promise.reject(error);
    }
);

export default instance;