import React from "react";
import { Box, Grid, Container, styled, Link } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EditIcon from "@mui/icons-material/Edit";
const MobileDescription = () => {
  const Span = styled("span")(({ theme }) => ({}));
  const Input = styled("input")(({ theme }) => ({}));

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        height: "auto",
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
                  fontSize: "18px",
                  marginBottom: "6px",
                }}
              >
                MOBILE APP DEVELOPMENT
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
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <span
              style={{
                width: "58px",
                height: "59px",
                backgroundColor: "#66DC7833",
                borderRadius: "360px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <EditIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#66DC78",
                }}
              />
            </span>
            <span
              style={{
                width: "58px",
                height: "59px",
                backgroundColor: "#66DC7833",
                borderRadius: "360px",
                marginLeft: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {" "}
              <EditIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#66DC78",
                  fontSize: "10px",
                }}
              />
            </span>
          </Box>
        </Box>
      </Container>
      <Box sx={{ borderBottom: "1px solid #999999" }}></Box>
      <Box sx={{}}>
        <Box
          sx={{
            border: "1px solid #66DC78",
            width: "100%%",
            marginTop: "20px !important",
            height: "303px",
            margin: "8px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#282828",
              width: "97%",
              height: "94%",

              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "0px 8px",
              }}
            >
              <p
                style={{
                  font: "normal normal  16px/21px Roboto",
                  color: "#999999",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                6 Minutes Ago . 60% Acceptance
              </p>
              <p
                style={{
                  font: "normal normal 16px/21px Roboto",
                  color: "#999999",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Budget: $2,000.00
              </p>
            </Box>
            <h2
              style={{
                font: "normal normal medium 24px/32px Roboto",
                color: "#FFFFFF",
                fontSize: "21px",
                margin: "0px 8px",
              }}
            >
              Android & iOS mobile app <br /> Development - Upwork
            </h2>
            <p
              style={{
                color: "#999999",
                fontSize: "16px",
                margin: "12px 0px 8px 8px",
                lineHeight: "23px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <p
              style={{
                color: "#66DC78",
                font: "normal normal 16px/21px Roboto",
                fontSize: "16px",
                marginLeft: "8px",
                marginTop: "20px",
              }}
            >
              Read More
            </p>
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid #66DC78",
            width: "100%%",
            marginTop: "15px !important",
            height: "303px",
            margin: "8px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#282828",
              width: "97%",
              height: "94%",

              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "0px 8px",
              }}
            >
              <p
                style={{
                  font: "normal normal  16px/21px Roboto",
                  color: "#999999",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                6 Minutes Ago . 60% Acceptance
              </p>
              <p
                style={{
                  font: "normal normal 16px/21px Roboto",
                  color: "#999999",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Budget: $2,000.00
              </p>
            </Box>
            <h2
              style={{
                font: "normal normal medium 24px/32px Roboto",
                color: "#FFFFFF",
                fontSize: "21px",
                margin: "0px 8px",
              }}
            >
              Android & iOS mobile app <br /> Development - Upwork
            </h2>
            <p
              style={{
                color: "#999999",
                fontSize: "16px",
                margin: "12px 0px 8px 8px",
                lineHeight: "23px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <p
              style={{
                color: "#66DC78",
                font: "normal normal 16px/21px Roboto",
                fontSize: "16px",
                marginLeft: "8px",
                marginTop: "20px",
              }}
            >
              Read More
            </p>
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid #66DC78",
            width: "100%%",
            marginTop: "15px !important",
            height: "303px",
            margin: "8px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#282828",
              width: "97%",
              height: "94%",

              borderRadius: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "0px 8px",
              }}
            >
              <p
                style={{
                  font: "normal normal  16px/21px Roboto",
                  color: "#999999",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                6 Minutes Ago . 60% Acceptance
              </p>
              <p
                style={{
                  font: "normal normal 16px/21px Roboto",
                  color: "#999999",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Budget: $2,000.00
              </p>
            </Box>
            <h2
              style={{
                font: "normal normal medium 24px/32px Roboto",
                color: "#FFFFFF",
                fontSize: "21px",
                margin: "0px 8px",
              }}
            >
              Android & iOS mobile app <br /> Development - Upwork
            </h2>
            <p
              style={{
                color: "#999999",
                fontSize: "16px",
                margin: "12px 0px 8px 8px",
                lineHeight: "23px",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>

            <p
              style={{
                color: "#66DC78",
                font: "normal normal 16px/21px Roboto",
                fontSize: "16px",
                marginLeft: "8px",
                marginTop: "20px",
              }}
            >
              Read More
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileDescription;
