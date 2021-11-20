import React, { useState } from "react";
import banner from "../../public/banner.jpg";
import banner2 from "../../public/banner2.jpg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Slide from "./Slide";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <AutoPlaySwipeableViews
      interval={10000}
      index={index}
      onChangeIndex={(val: number) => setIndex(val)}
      enableMouseEvents
    >
      <Slide
        banner={banner.src}
        header="Sale Offer 20% Off This Week"
        body="Discover Design of Modern Furniture"
      />
      <Slide
        banner={banner2.src}
        header="Sale Offer 20% Off This Week"
        body="Discover Design of Modern Furniture"
      />
    </AutoPlaySwipeableViews>
  );
};

export default Carousel;
