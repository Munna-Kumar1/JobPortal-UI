import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={6}
      sx={{
        background: "linear-gradient(90deg, #6A11CB, #2575FC)",
        paddingX: 2,
        borderRadius: "0 0 15px 15px",
      }}
    >
      <Toolbar>
        {/* LOGO */}
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontFamily: "Poppins",
            letterSpacing: 1,
          }}
        >
          Job Portal
        </Typography>

        {/* BUTTONS */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => navigate("/")}
            sx={{
              background: "#fff",
              color: "#000",
              borderRadius: "25px",
              textTransform: "none",
              "&:hover": { background: "#EAF1FF", transform: "scale(1.05)" },
            }}
          >
            Home
          </Button>

          <Button
            variant="contained"
            color="inherit"
            startIcon={<AddCircleIcon />}
            onClick={() => navigate("/create")}
            sx={{
              background: "#fff",
              color: "#000",
              borderRadius: "25px",
              textTransform: "none",
              "&:hover": { background: "#EAF1FF", transform: "scale(1.05)" },
            }}
          >
            Add Job
          </Button>

          <Button
            variant="contained"
            color="inherit"
            startIcon={<ContactMailIcon />}
            onClick={() => navigate("/contact")}
            sx={{
              background: "#fff",
              color: "#000",
              borderRadius: "25px",
              textTransform: "none",
              "&:hover": { background: "#EAF1FF", transform: "scale(1.05)" },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
