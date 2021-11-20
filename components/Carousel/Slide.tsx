import React, { FC } from "react";
import styles from "../../styles/Carousel.module.scss";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

interface IProps {
  banner: string;
  header: string;
  body: string;
  button?: string;
  onClick?: () => void;
}

const Slide: FC<IProps> = ({
  banner,
  header,
  body,
  button = "Подробнее",
  onClick = () => {},
}) => {
  return (
    <Grid container item className={styles.carousel}>
      <Grid container item className={styles.item}>
        <Grid
          style={{
            background: `center no-repeat url("${banner}")`,
            backgroundSize: "cover",
          }}
          container
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            item
            xs={10}
            sm={9}
            md={8}
            sx={{ height: { xs: "40%", sm: "70%", md: "40%" } }}
          >
            <Grid item xs={10} sm={7} md={7}>
              <Card className={styles.card}>
                <CardContent>
                  <Typography
                    className={styles.header}
                    sx={{
                      fontSize: {
                        xs: "3.5vw",
                        sm: "2vw",
                        md: "1.3vw",
                      },
                    }}
                    gutterBottom
                  >
                    {header}
                  </Typography>
                  <Typography
                    className={styles.body}
                    sx={{
                      fontSize: { xs: "6.5vw", sm: "3.5vw", md: "2.9vw" },
                    }}
                  >
                    {body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className={styles.button}
                    variant="contained"
                    size="large"
                    onClick={onClick}
                  >
                    {button}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Slide;
