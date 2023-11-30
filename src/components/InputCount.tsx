import React, { FC } from "react";
import { IconButton, Stack } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import classes from "styles/InputCount.module.scss";

interface IProps {
  includeProduct: boolean;
  setCount: (value: number) => void;
  count: number;
}

const InputCount: FC<IProps> = ({ includeProduct, setCount, count }) => {
  return (
    <Stack direction="row">
      <IconButton
        disabled={includeProduct}
        size="small"
        onClick={() => setCount(count - 1 < 0 ? count : --count)}
      >
        <RemoveIcon />
      </IconButton>
      <input
        type="number"
        className={classes.inputCount__input}
        value={count}
        disabled={includeProduct}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <IconButton
        disabled={includeProduct}
        size="small"
        onClick={() => setCount(++count)}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
};

export default InputCount;
