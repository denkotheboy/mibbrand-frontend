import React from "react";
import { PATH, TITLE } from "../constants";
import LayoutOtherPage from "../components/LayoutOtherPage";
import Grid from "@mui/material/Grid";
import Layout from "../components/Layout";
import Head from "next/head";
import { Paper, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Delivery = () => {
  return (
    <Layout>
      <Head>
        <title>Доставка - {TITLE}</title>
      </Head>
      <LayoutOtherPage
        title="Доставка"
        breadCrumbs={[
          { color: "#000000", text: "Главная", href: PATH.HOME, hover: "#000" },
          {
            color: "green",
            text: "Доставка",
            href: PATH.DELIVERY,
            hover: "green",
          },
        ]}
      >
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={11} md={7} textAlign="left" marginBottom={5}>
            <h3 style={{ color: "green" }}>По Екатеринбургу и России</h3>
            Доставка вашего заказа будет произведена курьером или транспортной
            компанией по указанному вами адресу. <br />
            <br /> Стоимость доставки в пределах г. Екатеринбурга рассчитывается
            индивидуально в зависимости от габаритов груза и удаленности места
            доставки.
            <br />
            <br /> Также мы можем отправить ваш заказ в любую точку России,
            стоимость доставки будет рассчитана по тарифам выбранной
            транспортной компании (СДЭК, почта России).
            <h3 style={{ color: "green" }}>Самовывоз</h3>
            Вы можете самостоятельно забрать ваш заказ по предварительной
            договоренности с нашим менеджером из нашего пункта выдачи по адресу:
            г. Екатеринбург, пос. Широкая речка, ул. Перевальная, 67
            <br />
            <br /> По всем вопросам обращайтесь по телефону: 8 (922) 177-51-94.
          </Grid>
        </Grid>
      </LayoutOtherPage>
    </Layout>
  );
};

export default Delivery;
