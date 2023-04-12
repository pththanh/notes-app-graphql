import React, { useContext } from "react";
import { Typography, Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { AuthContext } from "../context/AuthProvider";
import { useNavigation } from "react-router-dom";

function Login() {
  const auth = getAuth();
  const { user } = useContext(AuthContext);
  const navigate = useNavigation();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider);
    console.log(res);
  };

  if (user?.uid) {
    navigate("/");
    return;
  }

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Welcome to Note App
      </Typography>
      <Button variant="outlined" onClick={handleLoginWithGoogle}>
        Login With Google
      </Button>
    </>
  );
}

export default Login;
