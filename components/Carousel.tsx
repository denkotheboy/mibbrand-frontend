import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import styles from "../styles/Carousel.module.scss";
import banner from "../public/banner.jpg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <AutoPlaySwipeableViews
      interval={10000}
      index={index}
      onChangeIndex={(val: number) => setIndex(val)}
    >
      <Grid className={styles.carousel}>
        <Grid className={styles.item}>
          <Grid
            style={{
              background: `center no-repeat url("${banner.src}")`,
              backgroundSize: "cover",
            }}
            container
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container item xs={8} height="40%">
              <Grid item xs={7}>
                <Card className={styles.card}>
                  <CardContent>
                    <Typography className={styles.header} gutterBottom>
                      Sale Offer 20% Off This Week
                    </Typography>
                    <Typography className={styles.body}>
                      Discover Design of Modern Furniture
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={styles.button}
                      variant="contained"
                      size="large"
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={styles.carousel}>
        <Grid className={styles.item}>
          <Grid
            style={{
              background: `center no-repeat url("${banner.src}")`,
              backgroundSize: "cover",
            }}
            container
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container item xs={8} height="40%">
              <Grid item xs={7}>
                <Card className={styles.card}>
                  <CardContent>
                    <Typography className={styles.header} gutterBottom>
                      Sale Offer 20% Off This Week
                    </Typography>
                    <Typography className={styles.body}>
                      Discover Design of Modern Furniture
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={styles.button}
                      variant="contained"
                      size="large"
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AutoPlaySwipeableViews>
  );
};

export default Carousel;
