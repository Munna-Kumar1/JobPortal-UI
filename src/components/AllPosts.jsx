import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (id) => navigate("/edit", { state: { id } });

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/jobPost/${id}`);
    window.location.reload();
  };

  useEffect(() => {
    const fetchAll = async () => {
      const res = await axios.get("http://localhost:8080/jobPosts");
      setPost(res.data);
    };

    const fetchSearch = async () => {
      const res = await axios.get(
        `http://localhost:8080/jobPosts/keyword/${query}`
      );
      setPost(res.data);
    };

    fetchAll();
    if (query.length === 0) fetchAll();
    if (query.length > 2) fetchSearch();
  }, [query]);

  return (
    <Grid container spacing={3} sx={{ padding: "2%" }}>
      {/* Search Input */}
      <Grid item xs={12}>
        <TextField
          fullWidth
          placeholder="Search Job..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#6A11CB" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "70%",
            margin: "0 auto",
            display: "block",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Grid>

      {/* JOB CARDS */}
      {post &&
        post.map((p) => (
          <Grid item xs={12} md={6} lg={4} key={p.postId}>
            <Card
              sx={{
                padding: 3,
                borderRadius: "15px",
                background: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "0.3s",
                ":hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {p.postProfile}
              </Typography>

              <Typography sx={{ marginTop: 1, color: "#555" }}>
                {p.postDesc}
              </Typography>

              <Typography sx={{ marginTop: 2, fontWeight: 600 }}>
                Experience: {p.reqExperience} years
              </Typography>

              <Typography sx={{ marginTop: 1, fontWeight: 600 }}>
                Skills:
              </Typography>

              {p.postTechStack.map((s, i) => (
                <Typography key={i} sx={{ display: "inline", marginRight: 1 }}>
                  {s},
                </Typography>
              ))}

              <Box sx={{ marginTop: 2 }}>
                <IconButton
                  onClick={() => handleDelete(p.postId)}
                  sx={{ color: "red" }}
                >
                  <DeleteIcon />
                </IconButton>

                <IconButton
                  onClick={() => handleEdit(p.postId)}
                  sx={{ color: "#2575FC" }}
                >
                  <EditIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Search;
