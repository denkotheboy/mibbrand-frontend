import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import noPhoto from "../public/no-photo.png";
import { api } from "../api";
import { PRODUCTS } from "../constants";

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

  return (
    <>
      <Grid
        item
        xs={10}
        padding={2}
        paddingTop={10}
        justifyContent="center"
        textAlign="center"
      >
        {loading && list.length === 0 && <CircularProgress />}
        {error && <span style={{ color: "red" }}>{error}</span>}
        <ImageList cols={4} gap={20}>
          {list.map((item: IProductShort, index: number) => (
            <ImageListItem
              onClick={() => router.push(`/product/${item.id}`)}
              key={index}
              sx={{
                "&:hover": {
                  color: "green",
                },
              }}
            >
              <Grid
                item
                xs
                minHeight={300}
                sx={{
                  borderRadius: 2,
                  background: `url(${
                    item.image !== null ? item.image : noPhoto.src
                  }) no-repeat center center`,
                  backgroundSize: "100% 100%",
                  "&:hover": {
                    animation: "anm 0.7s ease forwards",
                    cursor: "pointer",
                  },
                  "@keyframes anm": {
                    to: {
                      backgroundSize: "115% 115%",
                    },
                  },
                }}
              />
              <Grid item xs>
                <ImageListItemBar
                  title={item.name}
                  subtitle={<strong>{item.price} руб.</strong>}
                  position="below"
                />
              </Grid>
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
