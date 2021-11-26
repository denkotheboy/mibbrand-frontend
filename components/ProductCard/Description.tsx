import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

interface IProps {
  description: string;
}

const Description: FC<IProps> = ({ description }) => {
  return (
    <Grid item xs={12} padding={1} textAlign="start">
      <Typography
        component="span"
        color="green"
        sx={{ fontSize: { xs: "5vw", sm: "3.5vw", md: "1.6vw" } }}
      >
        Описание
      </Typography>
      <Divider variant="middle" sx={{ margin: 2 }} />
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
    </Grid>
  );
};

export default Description;
