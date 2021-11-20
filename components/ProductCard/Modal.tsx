import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import MobileStepper from "@mui/material/MobileStepper";
import React, { FC } from "react";
import SwipeableViews from "react-swipeable-views";
import { IImage } from "../../pages/product/[id]";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";

interface IProps {
  onClose: () => void;
  images: IImage[];
  current?: number;
}

const Modal: FC<IProps> = ({ onClose, images, current = 0 }) => {
  const [activeStep, setActiveStep] = React.useState(current);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Dialog onClose={onClose} open={true}>
      <Grid container item xs justifyContent="center">
        <SwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((image, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={image.url}
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          variant="dots"
          steps={images.length}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: "100%", flexGrow: 2 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === images.length - 1}
              disableRipple
            >
              Следующая
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              disableRipple
            >
              <KeyboardArrowLeft />
              Предыдущая
            </Button>
          }
        />
      </Grid>
    </Dialog>
  );
};

export default Modal;
