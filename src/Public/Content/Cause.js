import React from "react";
import Data from "./CauseContent/CauseData";
import Grid from "@mui/material/Grid";
export default function Cause() {
  const causedata = [
    {
      id: 1,
      data: <Data />,
    },
    {
      id: 2,
      data: <Data />,
    },
    {
      id: 3,
      data: <Data />,
    },
    {
      id: 4,
      data: <Data />,
    },
    {
      id: 5,
      data: <Data />,
    },
    {
      id: 6,
      data: <Data />,
    },
  ];
  return (
    <div style={{ color: "white" }} className="disJustT">
      <div className="CauseT">
      <div className="empty20pxT"></div>
        <Grid container spacing={3}>
          {causedata.map((box) => (
            <Grid item sm={12} md={6} lg={4} key={box.id}>
              <div className="disJustT">{box.data}</div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
