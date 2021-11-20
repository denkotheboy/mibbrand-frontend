import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface IProps {
  description: string;
}

const Description: FC<IProps> = ({ description }) => {
  return (
    <Grid item xs={12} padding={1} textAlign="start">
      <Typography
        color="green"
        sx={{ fontSize: { xs: "5vw", sm: "3.5vw", md: "1.6vw" } }}
      >
        Описание
      </Typography>
      <hr />
      <Typography
        sx={{
          fontSize: 15,
          color: "#333",
          lineHeight: 1.5,
          width: "80%",
        }}
      >
        {description}
      </Typography>
      <hr />
    </Grid>
  );
};

export default Description;
