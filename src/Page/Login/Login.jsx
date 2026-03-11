import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase/Firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const handelSignIn = () => {
    console.log("google sign is clicked");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>this is login page</h3>
      <button onClick={handelSignIn}>Sign in with google</button>
    </div>
  );
};

export default Login;
