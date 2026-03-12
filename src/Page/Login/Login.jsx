import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
// import { auth } from "../../firebase/Firebase.init";
import { auth2 } from "../../firebase/Firebase.inits";

const Login = () => {
  const [user, setUser] = useState(null);

  const gitHubProvider = new GithubAuthProvider();

  const handelGitHubLogin = () => {
    console.log("github login clicked");
    signInWithPopup(auth2, gitHubProvider)
      .then((result) => {
        console.log(result, user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelSignOut = () => {
    signOut(auth2)
      .then(() => {
        console.log("sign out complete");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const provider = new GoogleAuthProvider();
  const handelSignInG = () => {
    console.log("facebook login clicked");
    signInWithPopup(auth2, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
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

      {user ? (
        <button onClick={handelSignOut}>sign out</button>
      ) : (
        <>
          <button onClick={handelSignInG}>sign in with google</button>
          <br />
          <button onClick={handelGitHubLogin}>sign in with GitHub</button>
        </>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <p>{user.uid}</p>
          <img src={user.photoURL} alt="user" width="100" />
        </div>
      )}
    </div>
  );
};

export default Login;
