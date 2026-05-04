import React, { useEffect, useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Edit = () => {
  const { state } = useLocation();
  const id = state?.id;

  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/jobPost/${id}`).then((res) => {
      setJob(res.data);
    });
  }, [id]);

  const handleUpdate = async () => {
    const techArray = job.postTechStack.toString().split(",");
    await axios.put("http://localhost:8080/jobPost", {
      ...job,
      postTechStack: techArray,
    });

    alert("Job Updated Successfully!");
    window.location.href = "/";
  };

  if (!job) return <h2>Loading...</h2>;

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
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold" }}>
          Edit Job
        </Typography>

        <TextField
          label="Profile"
          value={job.postProfile}
          fullWidth
          sx={{ marginTop: 2 }}
          onChange={(e) =>
            setJob({ ...job, postProfile: e.target.value })
          }
        />

        <TextField
          label="Description"
          value={job.postDesc}
          fullWidth
          multiline
          rows={3}
          sx={{ marginTop: 2 }}
          onChange={(e) => setJob({ ...job, postDesc: e.target.value })}
        />

        <TextField
          label="Experience (Years)"
          value={job.reqExperience}
          fullWidth
          type="number"
          sx={{ marginTop: 2 }}
          onChange={(e) =>
            setJob({ ...job, reqExperience: e.target.value })
          }
        />

        <TextField
          label="Tech Stack (comma separated)"
          value={job.postTechStack}
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
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Card>
    </Box>
  );
};

export default Edit;
