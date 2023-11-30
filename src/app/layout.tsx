import { Grid } from '@mui/material';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
