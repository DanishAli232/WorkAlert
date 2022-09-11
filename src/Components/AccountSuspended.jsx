import { Box, Container } from "@mui/material";
import React from "react";

const AccountSuspended = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#000000c9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            height: "214px",
            backgroundColor: "#282828",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
          }}
        >
          <h2
            style={{
              color: "#FFFFFF",
              font: "normal normal normal 20px/32px Roboto",
              fontSize: "20px",
              margin: "0px",
              fontWeight: "500",
            }}
          >
            Account Suspended
          </h2>
          <p
            style={{
              color: "#FFFFFF",
              font: "normal normal normal 12px/9px Roboto",
              fontSize: "12px",
              textAlign: "center",
              margin: "3px 0px 22px 0px",
              lineHeight: "18px",
              //   fontWeight: "00",
            }}
          >
            Your account has been suspended due to a payment failure. Please{" "}
            <br /> proceed to the payment page to continue using.
          </p>
          <span
            style={{
              color: "rgba(255, 255, 255, 1)",
              borderRadius: "4px",
              width: "204px",
              height: "53px",
              background: "rgba(102, 220, 120, 1) 0% 0% no-repeat padding-box",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              font: "normal normal medium 16px/21px Roboto",
              fontSize: "16px",
              //   marginLeft: "14px",
            }}
          >
            UNLOCK ACCOUNT
          </span>
        </Box>
      </Container>
    </Box>
  );
};

export default AccountSuspended;
