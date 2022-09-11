import React from "react";
import { Box, Grid, Container, styled, Link } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const CreateProposal = () => {
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
        <h2
          style={{
            font: " normal normal medium 20px/26px Roboto",
            color: "#FFFFFF",
            fontSize: "20px",
            margin: "29px 0px 29px 0px",
            fontWeight: "400",
          }}
        >
          CREATE PROPOSAL
        </h2>
        <textarea
          placeholder='Enter proposal here....'
          maxLength={500}
          style={{
            minWidth: "96%",
            maxWidth: "96px",
            maxHeight: "320px",
            minHeight: "320px",
            font: "normal normal normal 16px/21px Roboto",
            border: "1px solid #999999",
            backgroundColor: "#000000",
            borderRadius: "4px",
            color: "#999999",
            fontSize: "16px",
            padding: "10px",
          }}
        ></textarea>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <Box
            sx={{
              width: "504px",
              height: "78px",
              background: "#282828",
              border: "1px solid #999999",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "20px",
              borderRadius: "4px",
              position: "relative",
              bottom: "100px",
            }}
          >
            <p
              style={{
                color: "#999999",
                font: "normal normal medium 16px/21px Roboto",
                fontSize: "16px",
                margin: "0px",
                marginBottom: "4px",
                borderRadius: "4px",
              }}
            >
              REFERRAL LINK
            </p>
            <p
              style={{
                color: "#66DC78",
                font: "normal normal medium 16px/21px Roboto",
                fontSize: "16px",
                margin: "0px",
              }}
            >
              https://www.scopebuilder.com/referral=true
            </p>
          </Box>
        </Box>

        <Box
          sx={{
            color: "#999999",
            font: "normal normal normal 16px/21px Roboto",
            fontSize: "16px",
            textAlign: "end",
            position: "relative",
            bottom: "206px",
            paddingRight: "15px",
          }}
        >
          0/500
        </Box>
      </Container>

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            color: "white",
            position: "absolute",
            bottom: "0",
            marginBottom: "30px",
            marginLeft: "6px",
          }}
        >
          {" "}
          <Link to='forgot' style={{ textDecoration: "none" }}>
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
                cursor: "pointer",
              }}
            >
              CANCEL
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
              cursor: "pointer",
              //   marginLeft: "14px",
            }}
          >
            SAVE PROPOSAL
          </span>
        </Box>
      </Container>
    </Box>
  );
};

export default CreateProposal;
