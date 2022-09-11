import { Box, Typography } from "@mui/material";
import React from "react";

const ConnectionFailed = () => {
  return (
    <Box
      sx={{
        background:
          "transparent radial-gradient(closest-side at 50% 50%, #FF1818 0%, #800C0C 100%) 0% 0% no-repeat padding-box",
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
        Connection Failed{" "}
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
        It looks like we ran into trouble connecting your account. <br /> Would
        you like to try again?
      </p>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <span
          style={{
            borderRadius: "4px",
            width: "124px",
            height: "53px",
            color: "#FF1818",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            font: "normal normal medium 16px/21px Roboto",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            marginTop: "18px",
          }}
        >
          CANCEL
        </span>
        <span style={{ width: "15px" }}></span>
        <span
          style={{
            borderRadius: "4px",
            width: "216px",
            height: "53px",
            color: "#FFFFFF",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            font: "normal normal medium 16px/21px Roboto",
            background: "#790000",
            marginTop: "18px",
          }}
        >
          RETRY CONNECTION
        </span>
      </Box>
    </Box>
  );
};

export default ConnectionFailed;
