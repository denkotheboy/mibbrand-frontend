import { Breadcrumbs, Grid, Typography } from "@mui/material";
import Link from "next/link";

export interface IBreadcrumb {
  color: string;
  href: string;
  text: string;
  hover: string;
}

const fontSize = { xs: "4vw", sm: "2.5vw", md: "1.8vw", lg: "1.1vw" };

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
        paddingTop={0}
        paddingBottom={0}
        justifyContent="center"
      >
        <Grid item xs={10} textAlign="center">
          <h1>{title}</h1>
        </Grid>
        <Grid container item xs={10} justifyContent="center">
          <Breadcrumbs
            sx={{
              fontSize,
              fontWeight: 600,
            }}
          >
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
                  sx={{
                    fontSize,
                    fontWeight: 600,
                  }}
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
      <Grid container item padding={1} paddingTop={5}>
        <Grid item xs textAlign="center">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutOtherPage;
