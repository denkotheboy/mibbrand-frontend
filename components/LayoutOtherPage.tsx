import { Breadcrumbs, Grid, Typography } from "@mui/material";
import Link from "next/link";

export interface IBreadcrumb {
  color: string;
  href: string;
  text: string;
  hover: string;
}

const LayoutOtherPage = ({
  title,
  breadCrumbs,
  children,
}: {
  title: string;
  breadCrumbs: IBreadcrumb[];
  children: any;
}) => {
  return (
    <>
      <Grid
        container
        item
        xs
        padding={10}
        sx={{ background: "#ebebeb" }}
        justifyContent="center"
      >
        <Grid item xs={12} textAlign="center">
          <h2>{title}</h2>
        </Grid>
        <Grid container item xs justifyContent="center">
          <Breadcrumbs sx={{ fontSize: "1.1vw", fontWeight: 600 }}>
            {breadCrumbs.map((item, i) =>
              i < breadCrumbs.length - 1 ? (
                <Link href={item.href} key={i} passHref>
                  <span
                    style={{
                      textDecorationLine: "none",
                      color: item.color,
                      cursor: "pointer",
                    }}
                  >
                    {item.text}
                  </span>
                </Link>
              ) : (
                <Typography
                  sx={{ fontSize: "1.1vw", fontWeight: 600 }}
                  color="green"
                  key={i}
                >
                  {item.text}
                </Typography>
              )
            )}
          </Breadcrumbs>
        </Grid>
      </Grid>
      <Grid container padding={5}>
        <Grid item xs textAlign="center">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutOtherPage;
