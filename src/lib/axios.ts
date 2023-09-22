import Axios, { InternalAxiosRequestConfig } from "axios";

const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const axios = Axios.create({
  baseURL: BackendUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  //   withCredentials: true,
});
const authInterceptor = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (config.method === "get") {
    config.timeout = 15000;
  }
  return config;
};

const errorInterceptor = async (error: any) => {
  const originalRequest = error.config;
  if (error?.response?.status === 401 && !originalRequest?._retry) {
    // Nếu mã trả về là 401 và không phải là lần retry thì gọi refreshToken để lấy accessToken mới
    originalRequest._retry = true;
    try {
      const response = await axios.post("/api/refreshToken", {
        refreshToken: localStorage.getItem("refreshToken"),
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken); // Lưu refreshToken mới vào localStorage
      originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
      return axios(originalRequest);
    } catch (error) {
      console.log(error);
      // Nếu lỗi xảy ra trong quá trình lấy accessToken mới thì đăng xuất khỏi ứng dụng
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      // window.location.href = "/login";
    }
  }
  return Promise.reject(error);
};

axios.interceptors.request.use(authInterceptor);
axios.interceptors.response.use((response) => response, errorInterceptor);

export default axios;
