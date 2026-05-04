import React from "react";
import { Box, Card, Typography, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        padding: "3%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "60%",
          padding: 4,
          borderRadius: "18px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          background: "linear-gradient(135deg, #F7F8FA, #E3F2FD)",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 2 }}>
          Contact Us
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>
          📧 Email:
        </Typography>
        <Typography sx={{ color: "#444" }}>support@jobportal.com</Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>
          📞 Phone:
        </Typography>
        <Typography sx={{ color: "#444" }}>+91 9876543210</Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>
          📍 Address:
        </Typography>
        <Typography sx={{ color: "#444" }}>
          Job Portal Pvt. Ltd., Bengaluru, India
        </Typography>

        
      </Card>
    </Box>
  );
};

export default Contact;
