import * as React from "react";
import { Button } from "./components/Button";
import { fetchMemes, url } from "./constants";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import { useQuery } from "react-query";
import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import Meme from "./components/memes/Meme";
import MemeList from "./components/memes/MemeList";

function App() {
  const [memes, setMemes] = React.useState([]);

  const { data, refetch, isLoading, isFetching } = useQuery(url, fetchMemes, {
    // enabled: enabled, // disable this query from automatically running
    manual: true,
  });
  React.useEffect(() => {
    if (data?.memes) {
      setMemes(data.memes);
    }
  }, [data?.memes]);

  return (
    <div className="App">
      <Button variant="contained" onClick={refetch}>
        Load memes
      </Button>
      {isFetching || isLoading ? (
        <p>...Loading</p>
      ) : (
        <MemeList memes={memes}></MemeList>
      )}
    </div>
  );
}

export default App;
