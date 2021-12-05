import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as TableMui,
  IconButton,
} from "@mui/material";
import React, { FC } from "react";
import { IProductShort } from "../Products";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../hooks/store.hooks";
import { removeCartList, updateCountCartList } from "../../store/reducers/cart";
import InputCount from "../InputCount";

export interface IListCart extends IProductShort {
  count: number;
}

interface IProps {
  list: IListCart[];
}

const Table: FC<IProps> = ({ list }) => {
  const dispatch = useAppDispatch();
  return (
    <TableContainer component={Paper}>
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
                  src={item.image}
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
              <TableCell>{item.price}</TableCell>
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
                  onClick={() => dispatch(removeCartList(item.id))}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMui>
    </TableContainer>
  );
};

export default Table;
