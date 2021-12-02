import React, { useCallback, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MuiPhoneNumber from "material-ui-phone-number";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

interface ITextField {
  value: string;
  error: string;
  helpText: string;
}

const MyComponent = () => {
  const [name, setName] = useState<ITextField>({
    value: "",
    error: "",
    helpText: "Введите ваше имя",
  });
  const [phone, setPhone] = useState<ITextField>({
    value: "",
    error: "",
    helpText: "Введите ваш телефон",
  });
  const [email, setEmail] = useState<ITextField>({
    value: "",
    error: "",
    helpText: "Введите вашу почту",
  });

  const onSubmitHandler = useCallback(() => {
    if (name.value === "") {
      setName((prev) => ({ ...prev, error: "Имя не может быть пустым" }));
    }
  }, [name.value]);

  useEffect(() => {
    if (name.value !== "" && name.error !== "")
      setName((prev) => ({ ...prev, error: "" }));
  }, [name.value, name.error]);

  return (
    <Grid container item xs={12} justifyContent="center">
      <Grid item xs={4} padding={3}>
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
      <Grid item xs={4} padding={3}>
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
      <Grid item xs={4} padding={3}>
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
      <Grid item xs={10} padding={5}>
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

export default MyComponent;
