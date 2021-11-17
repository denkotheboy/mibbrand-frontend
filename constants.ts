export const TITLE = "Mibbrend";

export const PATH = {
  HOME: "/",
  CONTACTS: "/contacts",
  ABOUT: "/about",
  NO_MATCH: "*",
  PRODUCT: "/product/:id",
  CALCULATOR: "/calculator",
  DELIVERY: "/delivery",
};

export const SERVER = "http://localhost/api/";
export const TIMEOUT = 90;

export const PRODUCT = "product";
export const PRODUCTS = "products";
export const SEARCH = "search";
export const CATEGORY = "category";

export const MENU = [
  {
    text: "Главная",
    href: PATH.HOME,
  },
  {
    text: "Калькулятор",
    href: PATH.CALCULATOR,
  },
  {
    text: "Доставка",
    href: PATH.DELIVERY,
  },
  {
    text: "Контакты",
    href: PATH.CONTACTS,
  },
  {
    text: "О нас",
    href: PATH.ABOUT,
  },
];
