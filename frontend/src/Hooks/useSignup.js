import toast from "react-hot-toast";
import { useState } from "react";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async ({
    fullName,
    UserName,
    Password,
    ConfirmPassword,
    Gender,
  }) => {
    const success = handleInput({
      fullName,
      UserName,
      Password,
      ConfirmPassword,
      Gender,
    });
    if (!success) {
      console.log("Error in useSignup");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName: UserName,
          password: Password,
          confirmPassword: ConfirmPassword,
          gender: Gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
      console.log(error.message);
      return false;
    }
  };
  return { loading, signup };
};

const handleInput = ({
  fullName,
  UserName,
  Password,
  ConfirmPassword,
  Gender,
}) => {
  if (!fullName || !UserName || !Password || !ConfirmPassword || !Gender) {
    toast.error("Ensure all fields are filled");
    return false;
  } else if (ConfirmPassword != Password) {
    toast.error("Passwords don't match!!");
    return false;
  } else if (Password.length < 6) {
    toast.error("Passwords must have atleast 6 characters");
    return false;
  }
  return true;
};

export default useSignup;
