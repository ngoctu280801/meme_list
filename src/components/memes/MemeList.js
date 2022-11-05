import { Grid } from "@mui/material";
import React from "react";
import Meme from "./Meme";

const MemeList = ({ memes }) => {
  return (
    <Grid
      container
      spacing={4}
      style={{
        marginTop: "20px",
      }}
    >
      {memes.map((item) => (
        <Meme item key={item.id} url={item.url} name={item.name}></Meme>
      ))}
    </Grid>
  );
};

export default MemeList;
