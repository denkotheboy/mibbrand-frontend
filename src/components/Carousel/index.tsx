import banner from "../../../public/banner.jpeg";
import Slide from "components/Carousel/Slide";

const Carousel = () => {
  return (
    <Slide
      banner={banner.src}
      header="ЧПУ столярная мастерская"
      body="Собственное производство изделий из дерева"
    />
  );
};

export default Carousel;
