import React from "react";
import { Box, Grid, Container, styled, Link } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const ViewProfile = () => {
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
            <Box>
              <Link to='' style={{ textDecoration: "none" }}>
                <Span
                  sx={{
                    color: "#FFFFFF",
                    padding: "10px",
                    font: "normal normal medium 13px/18px Roboto",
                    textDecoration: "none",
                    fontWeight: "500",
                    width: "85px",
                    height: "34px",
                    fontSize: "15px",
                    backgroundColor: "#141414",
                    // "&:hover": {
                    //   backgroundColor: "rgba(102, 220, 120, 1)",
                    //   color: "rgba(40, 40, 40, 1)",
                    //   border: "1px solid rgba(40, 40, 40, 1)",
                    // },
                    cursor: "pointer",
                  }}
                >
                  LOG OUT
                </Span>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Section */}

      <Container>
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "25px",
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              width: "58px",
              height: "58px",
              background: "#282828",
              borderRadius: "360px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <KeyboardBackspaceIcon />
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <h2
              style={{
                margin: "0px",
                font: "normal normal medium 12px/16px Roboto",
                fontSize: "20px",
                marginBottom: "6px",
              }}
            >
              SCOPEBUILDER
            </h2>
            <p
              style={{
                margin: "0px",
                background: "#FFFFFF33",
                font: "normal normal medium 12px/16px Roboto",
                borderRadius: "4px",
                textAlign: "center",
                width: "23px",
                height: "24px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",

                justifyContent: "center",
                color: "#66DC78",
              }}
            >
              2
            </p>
          </Box>
        </Box>

        <Box
          sx={{
            background:
              " transparent radial-gradient(closest-side at 50% 50%, #66DC78 0%, #336E3C 100%) 0% 0% no-repeat padding-box",
            opacity: "1",
            height: "72vh",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              background: "rgb(255 255 255 / 40%) 0% 0% no-repeat padding-box",
              position: "relative",
              top: "2px",
              width: "81px",
              height: "81px",
              borderRadius: "360px",
            }}
          >
            {" "}
          </span>
          <span
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              width: "81px",
              height: "81px",
              opacity: 1,
              borderRadius: "360px",
              marginTop: "-69px",
            }}
          ></span>
          {/* <span
        style={{
          background: "#1890FF 0% 0% no-repeat padding-box",
          opacity: "1",
          width: "33px",
          height: "22px",
        }}
      ></span> */}
          <p
            style={{
              font: "normal normal medium 20px/32px Roboto",
              color: "#ffffff",
              fontSize: "26px",
            }}
          >
            ScopeBuilder Connected
          </p>
          <p
            style={{
              font: "normal normal medium 20px/32px Roboto",
              color: "#ffffff",
              width: "378px",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "-18px",
              lineHeight: "17px",
            }}
          >
            Congratulations! You’ve successfully linked your ScopeBuilder
            account.{" "}
          </p>

          <span
            style={{
              borderRadius: "4px",
              width: "286px",
              height: "53px",
              color: "#66DC78",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              font: "normal normal medium 16px/21px Roboto",
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              marginTop: "18px",
              cursor: "pointer",
            }}
          >
            VIEW SCOPEBUILDER PROFILE
          </span>
        </Box>
      </Container>
    </Box>
  );
};

export default ViewProfile;
