import React, { useCallback, useEffect, useRef, useState } from "react";
import { SxProps } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  ClickAwayListener,
  Box,
  TextField,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  CircularProgress,
} from "@mui/material";
import { get } from "../api";
import { SEARCH } from "../constants";
import { useRouter } from "next/router";

export interface IProductSearch {
  id: number;
  name: string;
  image: string;
}

const Search = () => {
  const router = useRouter();
  const timer = useRef<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<IProductSearch[]>([]);

  const handleClick = (id: number) => {
    setOpen(false);
    router.push(`/product/${id}`);
  };

  const styles: SxProps = {
    position: "absolute",
    top: 65,
    right: 0,
    left: -300,
    zIndex: 1,
    xs: {
      width: 300,
    },
    borderRadius: 2,
    border: "1px solid black",
    p: 1,
    bgcolor: "background.paper",
  };

  const fetch = useCallback(async () => {
    setLoading(true);
    await get<IProductSearch[]>(`${SEARCH}/${value}`)
      .then((resp: any) => {
        if (resp.status === 200) {
          setList(resp.data.list);
        } else if (resp.status === 204) {
          setList([]);
        }
      })
      .catch((e) => {
        setList([]);
      });
    setLoading(false);
  }, [value]);

  useEffect(() => {
    if (!open) setValue("");
  }, [open]);

  useEffect(() => {
    if (!open || value === "") setList([]);
  }, [open, value]);

  useEffect(() => {
    clearTimeout(timer.current);
    if (value !== "" && value.length >= 3) {
      timer.current = setTimeout(fetch, 700);
    }
  }, [fetch, value]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box sx={{ position: "relative" }}>
        <IconButton
          className="button"
          aria-label="cart"
          onClick={() => setOpen((prev) => !prev)}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
        {open ? (
          <Box sx={styles}>
            <TextField
              size="small"
              fullWidth
              label="Введите для поиска"
              variant="outlined"
              value={value}
              type="search"
              autoFocus
              onChange={(e) => setValue(e.target.value)}
              sx={{
                "& label.Mui-focused": {
                  color: "inherit",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "green",
                  },
                  "&:hover fieldset": {
                    borderColor: "green",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "green",
                  },
                },
              }}
            />
            <List dense={false} sx={{ maxHeight: 500, overflow: "auto" }}>
              {loading ? (
                <Box sx={{ width: "100%" }} textAlign="center">
                  <CircularProgress color="success" size={25} />
                </Box>
              ) : (
                list.map((item: IProductSearch, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      onClick={() => handleClick(item.id)}
                      key={index}
                      sx={{
                        borderRadius: 1,
                        "&:hover": {
                          background: "#e7e7e7",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          variant="rounded"
                          alt={item.name}
                          src={item.image}
                          sx={{ width: 56, height: 56, mr: 2 }}
                        />
                      </ListItemAvatar>
                      <ListItemText primary={item.name} />
                    </ListItem>
                    <Divider variant="middle" />
                  </React.Fragment>
                ))
              )}
            </List>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default Search;
