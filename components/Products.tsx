import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import noPhoto from "../public/no-photo.png";
import { api } from "../api";
import { PRODUCTS } from "../constants";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Short from "./AddProductToCard/Short";

export interface IProductShort {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface IProps {
  products: IProductShort[];
  errorResp: string;
  loadMore?: boolean;
}

const Products = ({
  products = [],
  errorResp = "",
  loadMore = true,
}: IProps) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.down("md"));
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(errorResp);
  const [list, setList] = useState<IProductShort[]>(products);

  const fetch = useCallback(async () => {
    await api
      .get<IProductShort[]>(`${PRODUCTS}?from=${products.length}&limit=8`)
      .then((resp) => {
        if (resp.status === 200) {
          setList((prev) => [...prev, ...resp.data]);
        } else {
          setError(JSON.stringify(resp.data, null, 4));
        }
      });
  }, [products.length]);

  const cols = useMemo(() => {
    if (xs) return 1;
    else if (sm) return 2;
    else if (md) return 3;
    return 4;
  }, [md, sm, xs]);

  return (
    <>
      <Grid
        item
        xs={10}
        padding={2}
        paddingTop={5}
        justifyContent="center"
        textAlign="center"
      >
        {loading && list.length === 0 && <CircularProgress />}
        {error && <span style={{ color: "red" }}>{error}</span>}
        <ImageList cols={cols} gap={20}>
          {list.map((item: IProductShort, index: number) => (
            <ImageListItem
              onClick={() => router.push(`/product/${item.id}`)}
              key={index}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "green",
                },
              }}
            >
              <img
                src={`${item.image}`}
                srcSet={`${item.image}`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                position="below"
                title={item.name}
                subtitle={<strong>{item.price} руб.</strong>}
                actionIcon={<Short id={item.id} />}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={10} padding={2} textAlign="center">
        {loadMore ? (
          <Button variant="contained" color="success" onClick={() => fetch()}>
            {loading ? <>Загрузка...</> : <>Загрузить ещё</>}
          </Button>
        ) : null}
      </Grid>
    </>
  );
};

export default Products;
