import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as TableMui,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import React, { FC, useCallback, useMemo } from "react";
import { IProduct } from "../Products";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../hooks/store.hooks";
import { removeCartList, updateCountCartList } from "../../store/reducers/cart";
import InputCount from "../InputCount";
import Grid from "@mui/material/Grid";
import noPhoto from "../../public/no-photo.png";
import { SERVER } from "../../constants";

export interface IListCart extends IProduct {
  count: number;
}

interface IProps {
  list: IListCart[];
  removeProduct: (id: number) => void;
}

const Table: FC<IProps> = ({ list, removeProduct }) => {
  const dispatch = useAppDispatch();

  const totalPrice = useMemo(() => {
    let sum = 0;
    list.forEach((item) => (sum += item.price * item.count));
    return sum;
  }, [list]);

  const totalCount = useMemo(() => {
    let sum = 0;
    list.forEach((item) => (sum += item.count));
    return sum;
  }, [list]);

  const remove = useCallback(
    (id: number) => {
      dispatch(removeCartList(id));
      removeProduct(id);
    },
    [dispatch, removeProduct]
  );

  return (
    <>
      <Grid
        container
        item
        xs={12}
        padding={1}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        {list.map((item) => (
          <Grid
            key={item.id}
            container
            item
            xs={12}
            paddingBottom={1}
            paddingTop={1}
          >
            <Grid item xs={3}>
              <Image
                src={
                  item.images.length > 0 ? SERVER + item.images[0].url : noPhoto
                }
                alt={item.name}
                height={100}
                width={100}
                layout="responsive"
                objectFit="cover"
              />
            </Grid>
            <Grid container item xs={9}>
              <Grid
                container
                item
                xs={12}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Typography
                  paddingLeft={1}
                  paddingTop={1}
                  component="span"
                  fontSize={13}
                >
                  {item.name}
                </Typography>
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => remove(item.id)}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Grid>
              <Grid
                container
                item
                xs={12}
                alignItems="flex-end"
                justifyContent="space-between"
              >
                <InputCount
                  includeProduct={false}
                  setCount={(value) =>
                    dispatch(
                      updateCountCartList({
                        id: item.id,
                        count: Number(value),
                      })
                    )
                  }
                  count={item.count}
                />
                <Typography padding={1} component="span" fontSize={12}>
                  {Number(item.price * item.count)} ({item.price}руб./шт.)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid container item xs={6}>
          <Typography fontWeight="bold">Итого:</Typography>
        </Grid>
        <Grid container item xs={6} justifyContent="flex-end">
          <Typography fontWeight="bold">{totalPrice} руб.</Typography>
        </Grid>
      </Grid>
      <TableContainer
        component={Paper}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <TableMui size="small">
          <TableHead>
            <TableRow>
              <TableCell width="12%" />
              <TableCell width="50%">Название</TableCell>
              <TableCell width="15%">Цена</TableCell>
              <TableCell width="15%">Количество</TableCell>
              <TableCell width="8%" />
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Image
                    src={
                      item.images.length > 0
                        ? SERVER + item.images[0].url
                        : noPhoto
                    }
                    alt={item.name}
                    height={100}
                    width={100}
                    layout="responsive"
                    objectFit="cover"
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell>
                  {Number(item.price * item.count)} ({item.price}руб./шт.)
                </TableCell>
                <TableCell>
                  <InputCount
                    includeProduct={false}
                    setCount={(value) =>
                      dispatch(
                        updateCountCartList({
                          id: item.id,
                          count: Number(value),
                        })
                      )
                    }
                    count={item.count}
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    color="error"
                    onClick={() => remove(item.id)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell />

              <TableCell>Итого</TableCell>
              <TableCell>{totalPrice} руб.</TableCell>
              <TableCell>{totalCount} шт.</TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </TableMui>
      </TableContainer>
    </>
  );
};

export default Table;
