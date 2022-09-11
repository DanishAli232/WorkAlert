import React, { useState } from "react";
import { Box, Grid, Container, styled, Alert } from "@mui/material";
import { Link } from "react-router-dom";
// import database from "../firebase";
import { useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const Span = styled("span")(({ theme }) => ({}));
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirm] = useState("");

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        <Alert severity='error'>Password Not Match</Alert>;
        console.log("Password Not Match");
      }
    }
    return isValid;
  };

  const Signup = () => {
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => console.log(err));
      console.log("Data Send");
      <Alert severity='success'> Data Send</Alert>;
    } else {
      <Alert severity='error'>Sorry! Not Data Send</Alert>;
      console.log("Not Data Send");
    }
    setemail("");
    setpassword("");
    setconfirm("");

    // console.log("clicker");
    // database
    //   .ref("signup/" + userId)
    //   .set({
    //     email: email,
    //     password: password,
    //     confirmPassword: confirmPassword,
    //   })
    //   .catch(alert);
  };

  useEffect(() => {
    console.log(confirmPassword);
  });
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* NavBar */}
      <Box
        sx={{ background: "rgba(40, 40, 40, 1) 0% 0% no-repeat padding-box" }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <h2 style={{ color: "rgba(102, 220, 120, 1)" }}>Work</h2>
              <h2 style={{ color: "white" }}>Alert</h2>
            </Box>
            <Box>
              <Link to='/' style={{ textDecoration: "none" }}>
                <Span
                  sx={{
                    color: "rgba(102, 220, 120, 1)",
                    border: "1px solid rgba(102, 220, 120, 1)",
                    padding: "10px",
                    font: "normal normal medium 13px/18px Roboto",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "15px",
                    "&:hover": {
                      backgroundColor: "rgba(102, 220, 120, 1)",
                      color: "rgba(40, 40, 40, 1)",
                      border: "1px solid rgba(40, 40, 40, 1)",
                    },
                    cursor: "pointer",
                  }}
                >
                  LOG IN
                </Span>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* LoginSection */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            width: "100%",
          }}
        >
          <h2
            style={{
              color: "rgba(255, 255, 255, 1)",
              font: "normal normal medium 20px/26px Roboto",
              marginTop: "40px",
              position: "relative",
              top: "2px",
            }}
          >
            SIGN UP
          </h2>

          <form>
            <input
              style={{
                width: "95%",
                height: "53px",
                marginTop: "20px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "4px",
                color: "rgba(153, 153, 153, 1)",
                background: "rgba(0, 0, 0, 1) 0% 0% no-repeat padding-box",
                border: "1px solid rgba(153, 153, 153, 1)",
                fontSize: "16px",
              }}
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <input
              style={{
                width: "95%",
                height: "53px",
                marginTop: "20px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "4px",
                color: "rgba(153, 153, 153, 1)",
                background: "rgba(0, 0, 0, 1) 0% 0% no-repeat padding-box",
                border: "1px solid rgba(153, 153, 153, 1)",
                fontSize: "16px",
              }}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <br />
            <input
              style={{
                width: "95%",
                height: "53px",
                marginTop: "20px",
                paddingLeft: "15px",
                paddingRight: "15px",
                borderRadius: "4px",
                color: "rgba(153, 153, 153, 1)",
                background: "rgba(0, 0, 0, 1) 0% 0% no-repeat padding-box",
                border: "1px solid rgba(153, 153, 153, 1)",
                fontSize: "16px",
              }}
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setconfirm(e.target.value)}
            />
          </form>
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            //   alignItems: "flex-end",
            color: "white",
            position: "absolute",
            bottom: "0",
            marginBottom: "22px",
            justifyContent: "center",
            // width: "100%",
          }}
        >
          <span
            onClick={Signup}
            style={{
              color: "rgba(255, 255, 255, 1)",
              borderRadius: "4px",
              width: "552px",
              height: "53px",
              background: "rgba(102, 220, 120, 1) 0% 0% no-repeat padding-box",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              font: "normal normal medium 16px/21px Roboto",
              cursor: "pointer",
              //   marginLeft: "14px",
            }}
          >
            SIGN UP
          </span>
        </Box>
      </Container>
    </Box>
  );
};

export default SignupPage;
