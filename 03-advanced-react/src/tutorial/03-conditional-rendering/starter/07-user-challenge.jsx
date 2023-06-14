import React, { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  function login() {
    setUser({
      firstName: "John",
      lastName: "Zhang",
    });
    setIsLogin(true);
  }

  function logout() {
    setUser(null);
    setIsLogin(false);
  }

  return (
    <div>
      {isLogin && (
        <div>
          <h4>
            Hi {user.firstName} {user.lastName} !
          </h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      )}
      {!isLogin && (
        <div>
          <h4>Please Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
