import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
// import { auth } from "../../firebase/Firebase.init";
import { auth2 } from "../../firebase/Firebase.inits";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const handelSignInFacebook = () => {
    console.log("facebook login clicked");
    signInWithPopup(auth2, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const handelSignIn = () => {
  //   console.log("google sign is clicked");

  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <h3>this is login page</h3>
      {/* <button onClick={handelSignIn}>Sign in with google</button> */}
      <br />

      <button onClick={handelSignInFacebook}>sign in with facebook</button>
    </div>
  );
};

export default Login;
