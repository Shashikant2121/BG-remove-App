import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = "http://localhost:4000";

  // REGISTER: POST http://localhost:4000/api/user/register
  const handleRegister = async ({ username, email, password }) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/user/register`,
        { username, email, password },
        { withCredentials: true }
      );

      toast.success(res.data?.message || "Registration successful");
      return res.data; 
    } catch (err) {
      const msg =
        err.response?.data?.message || "Registration failed, try again";
      toast.error(msg);
      throw err;
    }
  };


  // LOGIN: POST http://localhost:4000/api/user/login
  const handleLogin = async ({ email, password }) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/user/login`,
        { email, password },
        { withCredentials: true }
      );

      const { message, user, token } = res.data;

      if (token) {
        localStorage.setItem("token", token);
      }

      toast.success(message || "Login successful");
      return { user, token };
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed, try again";
      toast.error(msg);
      throw err;
    }
  };

  const value = {
    backendUrl,
    handleRegister,
    handleLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
