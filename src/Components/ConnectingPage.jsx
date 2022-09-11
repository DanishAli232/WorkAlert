import { Box, Typography } from "@mui/material";
import React from "react";

const ConnectingPage = () => {
  return (
    <Box
      sx={{
        background:
          "transparent radial-gradient(closest-side at 50% 50%, #1890FF 0%, #002766 100%) 0% 0% no-repeat padding-box",
        opacity: "1",
        height: "100vh",
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
        Connecting To ScopeBuilder
      </p>
      <p
        style={{
          font: "normal normal medium 20px/32px Roboto",
          color: "#ffffff",
          width: "306px",
          fontSize: "12px",
          textAlign: "center",
          marginTop: "-18px",
          lineHeight: "17px",
        }}
      >
        We appreciate your patience. Please wait while WorkAlert <br />
        is waiting for ScopeBuilder verification.
      </p>

      <span
        style={{
          borderRadius: "4px",
          width: "124px",
          height: "53px",
          color: "#1890FF",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          font: "normal normal medium 16px/21px Roboto",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          marginTop: "18px",
          cursor: "pointer",
        }}
      >
        CANCEL
      </span>
    </Box>
  );
};

export default ConnectingPage;
