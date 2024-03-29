'use client';

import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Phone } from '@mui/icons-material';
import { PATH } from 'constants/path';
import { useRouter } from 'next/navigation';
import style from 'styles/Header.module.scss';
import Image from 'next/image';
import logo from '../../public/logo.png';
import Search from 'components/Search';
import NavBarMobile from 'components/NavBarMobile';
import HomeIcon from '@mui/icons-material/Home';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ContactsIcon from '@mui/icons-material/Contacts';
import Cart from 'components/Cart';

export const MENU = [
  {
    text: 'Главная',
    href: PATH.HOME,
    icon: <HomeIcon />,
  },
  // {
  //   text: "Услуги",
  //   href: PATH.SERVICES,
  //   icon: <CalculateIcon />,
  // },
  {
    text: 'Доставка',
    href: PATH.DELIVERY,
    icon: <DeliveryDiningIcon />,
  },
  {
    text: 'Контакты',
    href: PATH.CONTACTS,
    icon: <ContactsIcon />,
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <>
      <NavBarMobile />
      <Grid container item xs={10} sx={{ display: { xs: 'none', lg: 'flex' } }} justifyContent="center">
        <Grid item xs={4} padding={1} textAlign="start">
          <Image className={style.header__logo} src={logo} alt="Logo" onClick={() => router.push(PATH.HOME)} />
        </Grid>
        <Grid container item xs={4} padding={1} alignItems="center">
          <Grid item container xs alignContent="center">
            {MENU.map((item, index) => (
              <Grid item xs textAlign="center" key={index}>
                <Button
                  onClick={() => router.push(item.href)}
                  variant="text"
                  color="inherit"
                  className={style.header__button}
                  fullWidth
                >
                  <strong>{item.text}</strong>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container item xs={2} alignItems="center">
          <Grid item xs justifyContent="center">
            <a href="tel:+79221775194" className={style.header__phone__a}>
              <Button color="inherit" className={style.header__button} startIcon={<Phone />} variant="text" fullWidth>
                <Typography fontSize="1.1vw">+7 (922) 177-51-94</Typography>
              </Button>
            </a>
          </Grid>
        </Grid>
        <Grid container item xs={2} alignItems="center">
          <Grid container alignItems="center" justifyContent="center">
            <Grid container item xs={7} justifyContent="center">
              <Cart />
            </Grid>
            <Grid container item xs={5} justifyContent="center">
              <Search />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
