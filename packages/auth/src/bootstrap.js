import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (el) => {
  return ReactDOM.render(<App />, el);
};

//mount dev
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_auth-dev-root");
  if (el) {
    mount(el);
  }
}

export { mount };
