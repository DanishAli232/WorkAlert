import React from "react";
import { Box, Grid, Container, styled } from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Keywords = () => {
  const Span = styled("span")(({ theme }) => ({}));
  const Input = styled("input")(({ theme }) => ({}));

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 1)",
        height: "auto",
        position: "relative",
        paddingBottom: "20px",
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

                  cursor: "pointer",
                }}
              >
                LOG OUT
              </Span>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Section */}
      <Box>
        <Container>
          <h2
            style={{
              font: " normal normal medium 20px/26px Roboto",
              color: "#FFFFFF",
              fontSize: "19px",
              margin: "29px 0px 17px 0px",
              fontWeight: "500",
            }}
          >
            KEYWORDS
          </h2>
          <Box
            sx={{
              width: "100%",
              height: "76px",
              backgroundColor: "#282828",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <DeleteIcon sx={{ color: "#999999", marginRight: "8px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#999999",
                    margin: "0px",
                    textAlign: "left",
                    font: "normal normal normal 14px/19px Roboto",
                    fontSize: "14px",
                    width: "100%",
                  }}
                >
                  Keyword
                </p>
                <p
                  style={{ color: "#FFFFFF", margin: "0px", fontSize: "16px" }}
                >
                  Mobile App Developement
                </p>
              </Box>
            </Box>

            <span
              style={{
                backgroundColor: "#66DC781A",
                color: "#66DC78",
                width: "24px",
                height: "24px",
                borderRadius: "360px",
                display: "flex",
                justifyContent: "center",
                marginRight: "15px",
                fontSize: "11px",
                alignItems: "center",
              }}
            >
              2
            </span>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "76px",
              backgroundColor: "#282828",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <DeleteIcon sx={{ color: "#999999", marginRight: "8px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#999999",
                    margin: "0px",
                    textAlign: "left",
                    font: "normal normal normal 14px/19px Roboto",
                    fontSize: "14px",
                    width: "100%",
                  }}
                >
                  Keyword
                </p>
                <p
                  style={{ color: "#FFFFFF", margin: "0px", fontSize: "16px" }}
                >
                  Mobile App Developement
                </p>
              </Box>
            </Box>

            <span
              style={{
                backgroundColor: "#66DC781A",
                color: "#66DC78",
                width: "24px",
                height: "24px",
                borderRadius: "360px",
                display: "flex",
                justifyContent: "center",
                marginRight: "15px",
                fontSize: "11px",
                alignItems: "center",
              }}
            >
              2
            </span>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "76px",
              backgroundColor: "#282828",
              borderRadius: "4px",
              marginTop: "15px",

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <DeleteIcon sx={{ color: "#999999", marginRight: "8px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#999999",
                    margin: "0px",
                    textAlign: "left",
                    font: "normal normal normal 14px/19px Roboto",
                    fontSize: "14px",
                    width: "100%",
                  }}
                >
                  Keyword
                </p>
                <p
                  style={{ color: "#FFFFFF", margin: "0px", fontSize: "16px" }}
                >
                  Mobile App Developement
                </p>
              </Box>
            </Box>

            <span
              style={{
                backgroundColor: "#66DC781A",
                color: "#66DC78",
                width: "24px",
                height: "24px",
                borderRadius: "360px",
                display: "flex",
                justifyContent: "center",
                marginRight: "15px",
                fontSize: "11px",
                alignItems: "center",
              }}
            >
              2
            </span>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "76px",
              backgroundColor: "#282828",
              borderRadius: "4px",
              marginTop: "15px",

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <DeleteIcon sx={{ color: "#999999", marginRight: "8px" }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "#999999",
                    margin: "0px",
                    textAlign: "left",
                    font: "normal normal normal 14px/19px Roboto",
                    fontSize: "14px",
                    width: "100%",
                  }}
                >
                  Keyword
                </p>
                <p
                  style={{ color: "#FFFFFF", margin: "0px", fontSize: "16px" }}
                >
                  Mobile App Developement
                </p>
              </Box>
            </Box>

            <span
              style={{
                backgroundColor: "#66DC781A",
                color: "#66DC78",
                width: "24px",
                height: "24px",
                borderRadius: "360px",
                display: "flex",
                justifyContent: "center",
                marginRight: "15px",
                fontSize: "11px",
                alignItems: "center",
              }}
            >
              2
            </span>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "146px",
              backgroundColor: "#282828",
              borderRadius: "4px",
              marginTop: "15px",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "15px",
              //   justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "94%",
              }}
            >
              <input
                style={{
                  width: "220px",
                  height: "53px",
                  marginTop: "20px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  borderRadius: "4px",
                  color: "#999999",
                  background: "#282828 0% 0% no-repeat padding-box",
                  border: "1px solid #999999",
                  fontSize: "16px",
                  font: "normal normal normal 16px/21px Roboto",
                }}
                type='text'
                placeholder='Keyword'
              />
              <input
                style={{
                  width: "220px",
                  height: "53px",
                  marginTop: "20px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  borderRadius: "4px",
                  color: "#999999",
                  background: "#282828 0% 0% no-repeat padding-box",
                  border: "1px solid #999999",
                  fontSize: "16px",
                  font: "normal normal normal 16px/21px Roboto",
                }}
                type='text'
                placeholder='UpWork RSS Link'
              />
            </Box>
            <span
              style={{
                width: "94%",
                height: "53px",
                backgroundColor: "#141414",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                marginTop: "7px",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            >
              ADD NEW KEYWORD
            </span>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "185px",
              backgroundColor: "#282828",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                background:
                  "transparent radial-gradient(closest-side at 50% 50%, #66DC78 0%, #336E3C 100%) 0% 0% no-repeat padding-box",
                width: "94%",
                height: "121px",
                alignItems: "center",
                border: "1px solid #FFFFFF66",
                borderRadius: "10px",
              }}
            >
              <span
                style={{
                  background: "#FFFFFF 0% 0% no-repeat padding-box",
                  width: "77px",
                  height: "77px",
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
                  font: "18px/26px Roboto",
                  letterSpacing: "0px",
                  marginLeft: "20px",
                }}
              >
                ScopeBuilder Connected
              </h2>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "35%",
                }}
              >
                <span
                  style={{
                    width: "57px",
                    height: "57px",
                    backgroundColor: "#31803d",
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
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Keywords;
