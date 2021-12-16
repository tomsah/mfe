import React, { useRef, useEffect } from "react";
import { mount as mountAuth } from "auth/AuthApp";

const AuthApp = () => {
  const authContainer = useRef(null);

  useEffect(() => {
    mountAuth(authContainer.current);
  });

  return <div ref={authContainer} />;
};

export default AuthApp;
