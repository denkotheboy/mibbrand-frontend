import React, { FC, useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MuiPhoneNumber from "material-ui-phone-number";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import validatePhone from "./phone";
import validateEmail from "./email";
import validateName from "./FullName";
import { api } from "../../api";
import { ORDER, PRODUCTS } from "../../constants";
import { useAppSelector } from "../../hooks/store.hooks";
import { CART_LIST } from "../../store/reducers/cart";
import { shallowEqual } from "react-redux";
import Modal from "./Modal";

interface ITextField {
  value: string;
  error: string;
  helpText: string;
}

interface IProps {
  setError: (value: string) => void;
}

const OrderForm: FC<IProps> = ({ setError }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const products = useAppSelector(CART_LIST, shallowEqual);
  const [modal, setModal] = useState<string>("");

  const [name, setName] = useState<ITextField>({
    value: "",
    error: "",
    helpText: "Введите ваше ФИО (обязательное)",
  });
  const [phone, setPhone] = useState<ITextField>({
    value: "",
    error: "",
    helpText: "Введите ваш телефон (обязательное)",
  });
  const [email, setEmail] = useState<ITextField>({
    value: "",
    error: "",
    helpText: "Введите вашу почту (обязательное)",
  });
  const [comments, setComments] = useState<string>("");

  const fetch = useCallback(async () => {
    setLoading(true);
    await api
      .post(ORDER, {
        data: {
          full_name: name.value,
          phone: phone.value,
          email: email.value,
          comments,
          products,
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setModal("Заявка успешно отправлена");
        } else {
          setError(resp.data);
        }
      })
      .catch((e) => setError(JSON.stringify(e)));
    setLoading(false);
  }, [comments, email.value, name.value, phone.value, products, setError]);

  const onSubmitHandler = useCallback(async () => {
    const validName = validateName(name.value);
    if (validName) {
      console.log(1);
      setName((prev) => ({ ...prev, error: validName }));
      return;
    }
    const validPhone = validatePhone(phone.value);
    if (validPhone) {
      console.log(2);
      setPhone((prev) => ({ ...prev, error: validPhone }));
      return;
    }
    const validEmail = validateEmail(email.value);
    if (!validEmail) {
      console.log(3);
      setEmail((prev) => ({ ...prev, error: "Неверный формат почты" }));
      return;
    }
    await fetch();
  }, [email.value, fetch, name.value, phone.value]);

  useEffect(() => {
    if (name.value !== "" && name.error !== "") {
      setName((prev) => ({ ...prev, error: "" }));
    }
    if (phone.value !== "" && phone.error !== "") {
      setPhone((prev) => ({ ...prev, error: "" }));
    }
    if (email.value !== "" && email.error !== "") {
      setEmail((prev) => ({ ...prev, error: "" }));
    }
  }, [
    name.value,
    name.error,
    phone.value,
    phone.error,
    email.value,
    email.error,
  ]);

  return (
    <Grid container item xs={12} justifyContent="center">
      {modal !== "" ? <Modal text={modal} /> : null}
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        padding={{ xs: 0, md: 3 }}
        paddingBottom={{ xs: 2, md: 0 }}
      >
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "green",
              },
              "&.Mui-focused fieldset": {
                borderColor: "green",
              },
            },
          }}
          fullWidth
          helperText={name.error === "" ? name.helpText : name.error}
          value={name.value}
          error={name.error !== ""}
          onChange={(e) =>
            setName((prev) => ({ ...prev, value: e.target.value }))
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        padding={{ xs: 0, md: 3 }}
        paddingBottom={{ xs: 2, md: 0 }}
      >
        <MuiPhoneNumber
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "green",
              },
              "&.Mui-focused fieldset": {
                borderColor: "green",
              },
            },
          }}
          fullWidth
          value={phone.value}
          onChange={(value) =>
            setPhone((prev) => ({ ...prev, value: String(value) }))
          }
          onlyCountries={["ru"]}
          variant="outlined"
          error={phone.error !== ""}
          defaultCountry="ru"
          helperText={phone.error === "" ? phone.helpText : phone.error}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        padding={{ xs: 0, md: 3 }}
        paddingBottom={{ xs: 2, md: 0 }}
      >
        <TextField
          sx={{
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "green",
              },
              "&.Mui-focused fieldset": {
                borderColor: "green",
              },
            },
          }}
          fullWidth
          helperText={email.error === "" ? email.helpText : email.error}
          value={email.value}
          error={email.error !== ""}
          onChange={(e) =>
            setEmail((prev) => ({ ...prev, value: e.target.value }))
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        padding={{ xs: 0, md: 3 }}
        paddingBottom={{ xs: 2, md: 0 }}
      >
        <TextField
          fullWidth
          multiline
          rows={3}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          helperText="Дополнительная информация по заказу"
        />
      </Grid>
      <Grid item xs={12} sm={8} md={8} padding={{ xs: 0, md: 3 }}>
        <Button
          onClick={onSubmitHandler}
          variant="contained"
          color="warning"
          size="large"
          fullWidth
        >
          Оставить заявку
        </Button>
      </Grid>
    </Grid>
  );
};

export default OrderForm;
