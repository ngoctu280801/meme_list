import { Grid } from "@mui/material";
import React from "react";

const Meme = ({ url, name, item }) => {
  return (
    <Grid item xs={3} style={{ textAlign: "center" }}>
      <img
        src={url}
        alt={name}
        loading="lazy"
        style={{
          objectFit: "scale-down",
          width: "100%",
          height: "300px",
        }}
      />
    </Grid>
  );
};

export default Meme;
