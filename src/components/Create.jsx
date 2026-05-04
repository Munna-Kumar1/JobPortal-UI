import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";

const Create = () => {
  const [job, setJob] = useState({
    postId: "",
    postProfile: "",
    postDesc: "",
    reqExperience: "",
    postTechStack: "",
  });

  const handleSubmit = async () => {
    const techArray = job.postTechStack.split(",");
    await axios.post("http://localhost:8080/jobPost", {
      ...job,
      postTechStack: techArray,
    });

    alert("Job Added Successfully!");
    window.location.href = "/";
  };

  return (
    <Box sx={{ padding: "2%" }}>
      <Card
        sx={{
          width: "50%",
          margin: "0 auto",
          padding: 4,
          borderRadius: "15px",
          background: "#fff",
          boxShadow: "0 4px 25px rgba(0,0,0,0.15)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
          Add Job
        </Typography>

        <TextField
          label="Job ID"
          fullWidth
          sx={{ marginTop: 2 }}
          onChange={(e) => setJob({ ...job, postId: e.target.value })}
        />

        <TextField
          label="Profile"
          fullWidth
          sx={{ marginTop: 2 }}
          onChange={(e) => setJob({ ...job, postProfile: e.target.value })}
        />

        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          sx={{ marginTop: 2 }}
          onChange={(e) => setJob({ ...job, postDesc: e.target.value })}
        />

        <TextField
          label="Experience (Years)"
          type="number"
          fullWidth
          sx={{ marginTop: 2 }}
          onChange={(e) =>
            setJob({ ...job, reqExperience: e.target.value })
          }
        />

        <TextField
          label="Tech Stack (comma separated)"
          fullWidth
          sx={{ marginTop: 2 }}
          onChange={(e) =>
            setJob({ ...job, postTechStack: e.target.value })
          }
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: 3,
            background: "linear-gradient(90deg, #6A11CB, #2575FC)",
            padding: "12px",
            borderRadius: "25px",
            fontSize: "16px",
            "&:hover": { opacity: 0.9 },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Card>
    </Box>
  );
};

export default Create;
