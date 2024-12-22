import React, { useState } from "react";
import LoginComp from "../components/LoginComp";
import SignUpComp from "../components/SignUpComp";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="w-full flex justify-center pt-8">
      {isLogin ? (
        <LoginComp toggleLogin={toggleLogin} />
      ) : (
        <SignUpComp toggleLogin={toggleLogin} />
      )}
    </div>
  );
}

export default Login;
