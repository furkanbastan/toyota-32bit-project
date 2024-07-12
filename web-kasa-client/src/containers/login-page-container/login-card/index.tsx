import React from "react";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";

import * as authService from "../../../services/AuthService";
import { LoginModel } from "../../../models/LoginModel";
import { useKeyboardActions } from "../../../contexts/KeyboardContext";
import { useAuthActions } from "../../../contexts/AuthContext";
import * as S from "./styled";

function LoginCard() {
  const keyboardActions = useKeyboardActions();

  const loginForm = useForm<LoginModel>({
    defaultValues: {
      usercode: "",
      password: "",
    },
  });

  const loginMutation = authService.login();

  const authActions = useAuthActions();

  const { t } = useTranslation(undefined, { keyPrefix: "login-page" });

  const handleSubmitLoginForm: SubmitHandler<LoginModel> = (data) => {
    loginMutation.trigger(data);
  };

  function handleClickUsercode() {
    keyboardActions.handleClickInput({
      value: loginForm.getValues("usercode"),
      setValue: (newValue: string) => loginForm.setValue("usercode", newValue),
    });
  }

  function handleClickPassword() {
    keyboardActions.handleClickInput({
      value: loginForm.getValues("password"),
      setValue: (newValue: string) => loginForm.setValue("password", newValue),
    });
  }

  React.useEffect(() => {
    if (loginMutation.data !== undefined && loginMutation.data.isSuccess) {
      authActions.login(loginMutation.data.value!);
    }
  }, [loginMutation.data]);

  return (
    <S.LoginCard>
      <S.TitleWrapper>
        <Box>
          <Typography component="h1" level="h3">
            {t("login")}
          </Typography>
          <Typography level="body-sm">
            {t("have-an-account")}{" "}
            <Link href="#" level="title-sm">
              {t("register")}
            </Link>
          </Typography>
        </Box>
      </S.TitleWrapper>

      <Divider></Divider>

      {loginMutation.data !== undefined && !loginMutation.data.isSuccess && (
        <Typography color="danger" fontWeight="lg">
          {t("error-message")}
        </Typography>
      )}

      <S.LoginForm onSubmit={loginForm.handleSubmit(handleSubmitLoginForm)}>
        <FormControl error={loginForm.formState.errors.usercode ? true : false}>
          <FormLabel>{t("usercode")}</FormLabel>
          <Input
            type="text"
            {...loginForm.register("usercode", {
              required: {
                value: true,
                message: t("usercode-required"),
              },
            })}
            onClick={handleClickUsercode}
            disabled={loginMutation.isMutating}
            placeholder={t("usercode-placeholder")}
          />
          {loginForm.formState.errors.usercode && (
            <FormHelperText>
              {loginForm.formState.errors.usercode.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl error={loginForm.formState.errors.password ? true : false}>
          <FormLabel>{t("password")}</FormLabel>
          <Input
            type="password"
            {...loginForm.register("password", {
              required: {
                value: true,
                message: t("password-required"),
              },
              minLength: {
                value: 6,
                message: t("password-min"),
              },
            })}
            onClick={handleClickPassword}
            disabled={loginMutation.isMutating}
            placeholder={t("password-placeholder")}
          />
          {loginForm.formState.errors.password && (
            <FormHelperText>
              {loginForm.formState.errors.password.message}
            </FormHelperText>
          )}
        </FormControl>

        <Stack gap={4} sx={{ mt: 2 }}>
          <Checkbox
            size="sm"
            label={t("remember-me")}
            name="persistent"
            disabled={loginMutation.isMutating}
          />
          <Button type="submit" loading={loginMutation.isMutating} fullWidth>
            {t("login-button")}
          </Button>
        </Stack>
      </S.LoginForm>
    </S.LoginCard>
  );
}

export { LoginCard };
