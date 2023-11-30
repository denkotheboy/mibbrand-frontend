import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Search from 'components/Search';
import { TITLE } from 'constants/texts';
import { PATH } from 'constants/path';
import NavigationDrawer from 'components/NavigationDrawer';
import Basket from 'components/Cart';
import { useRouter } from 'next/navigation';

const NavBarMobile = () => {
  const router = useRouter();

  return (
    <AppBar position="relative" color="inherit" sx={{ display: { xs: 'flex', lg: 'none' } }}>
      <Toolbar>
        <NavigationDrawer />
        <Typography onClick={() => router.push(PATH.HOME)} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {TITLE}
        </Typography>
        <Basket />
        <Search />
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMobile;
