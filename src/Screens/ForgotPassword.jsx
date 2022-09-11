import React from "react";
import { Box, Grid, Container, styled } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPage = () => {
  const Span = styled("span")(({ theme }) => ({}));
  const Input = styled("input")(({ theme }) => ({}));

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
            <Box></Box>
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
              color: "#FFFFFF",
              font: "normal normal medium 20px/26px Roboto",
              marginTop: "40px",
              position: "relative",
              top: "2px",
            }}
          >
            FORGOT PASSWORD
          </h2>

          <form>
            <Input
              sx={{
                outline: "none",
                width: "95%",
                height: "53px",
                background:
                  "rgba(0, 0, 0, 1) 0% 0% no-repeat padding-box !important",
                border: "1px solid rgba(153, 153, 153, 1)",
                borderRadius: "4px",
                paddingLeft: "15px",
                paddingRight: "15px",
                opacity: "1",
                color: "rgba(153, 153, 153, 1) !important",
                fontSize: "20px",
              }}
              type='email'
              placeholder='Email Address'
              autoComplete='off'
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
          }}
        >
          {" "}
          <Link to='/' style={{ textDecoration: "none" }}>
            {" "}
            <span
              style={{
                color: "rgba(255, 255, 255, 1)",
                borderRadius: "4px",
                width: "260px",
                height: "53px",
                background: "rgba(40, 40, 40, 1) 0% 0% no-repeat padding-box",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              GO BACK
            </span>
          </Link>
          <span style={{ width: "20px" }}></span>
          <span
            style={{
              color: "rgba(255, 255, 255, 1)",
              borderRadius: "4px",
              width: "260px",
              height: "53px",
              background: "rgba(102, 220, 120, 1) 0% 0% no-repeat padding-box",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              //   marginLeft: "14px",
            }}
          >
            SEND EMAIL
          </span>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPage;
