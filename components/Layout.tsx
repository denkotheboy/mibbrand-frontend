import { Grid } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: any }) => {
  return (
    <Grid container>
      <Grid container justifyContent="center">
        <Header />
      </Grid>
      <Grid container justifyContent="center">
        {children}
      </Grid>
      <Grid container justifyContent="center">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Layout;
