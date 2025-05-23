import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (userName, passwd) => {
    setLoading(true);
    try {
      const data = await axios.post("/api/auth/login", {
        userName,
        password: passwd,
      });

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
