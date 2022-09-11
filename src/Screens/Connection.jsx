import React from "react";
import { Box, Grid, Container, styled, Link } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Connection = () => {
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              color: "#FFFFFF",
              font: "20px/26px Roboto",
              letterSpacing: "0px",
              marginTop: "40px",
            }}
          >
            GET STARTED
          </h2>
          <p
            style={{
              font: "normal normal normal 16px/21px Roboto",
              color: "#999999",
              marginTop: "0px",
              marginBottom: "29px",
            }}
          >
            Connect to ScopeBuilder account and use for free!
          </p>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              background:
                "transparent radial-gradient(closest-side at 50% 50%, #1890FF 0%, #002766 100%) 0% 0% no-repeat padding-box",
              width: "100%",
              height: "121px",
              alignItems: "center",
              border: "1px solid #FFFFFF66",
              borderRadius: "10px",
            }}
          >
            <span
              style={{
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                width: "81px",
                height: "81px",
                opacity: 1,
                borderRadius: "360px",
                position: "relative",
                // right: "73px",
                marginLeft: "20px",
                boxShadow: "-6px 1px 1px 1px rgb(255 255 255 / 40%)",
              }}
            ></span>

            <h2
              style={{
                color: "#FFFFFF",
                font: "20px/26px Roboto",
                letterSpacing: "0px",
                marginLeft: "20px",
              }}
            >
              Connect ScopeBuilder
            </h2>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", width: "35%" }}
            >
              <span
                style={{
                  width: "57px",
                  height: "57px",
                  backgroundColor: "#003989",
                  borderRadius: "360px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowRightAltIcon sx={{ color: "#FFFFFF" }} />
              </span>
            </Box>
          </Box>

          <Box>
            <h2
              style={{
                color: "#FFFFFF",
                font: "20px/26px Roboto",
                letterSpacing: "0px",
                marginTop: "24px",
              }}
            >
              OR SUBSCRIBE NOW
            </h2>
            <p
              style={{
                font: "normal normal normal 16px/21px Roboto",
                color: "#999999",
                marginBottom: "29px",
              }}
            >
              Subscribe for $2.99 only a month!
            </p>

            <span
              style={{
                width: "100%",
                backgroundColor: "#282828",
                color: "#FFFFFF",
                borderRadius: "4px",
                // width: "552px",
                height: "53px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                font: "normal normal medium 16px/21px Roboto",
                cursor: "pointer",
              }}
            >
              SUBSCRIBE NOW
            </span>
          </Box>
        </Box>
      </Container>
      <Container></Container>
    </Box>
  );
};

export default Connection;
