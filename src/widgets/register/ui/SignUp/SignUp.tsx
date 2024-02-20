import { CreateAccountForm } from "@/features/createAccount";
import { AppImage } from "@/shared/ui/AppImage";
import { Stack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { type ReactNode } from "react";
import cls from "./SignUp.module.scss";

export const SignUp = (): ReactNode => {
  return (
    <Stack align="center" gap="60" className="">
      <AppImage src="a" className={cls.image} />
      <Stack direction="column" gap="40" justify="center">
        <Stack direction="column" gap="20" className={cls.text}>
          <Text size="h2" text="Create account" />
          <Text
            size="largeBase"
            text="Welcome! enter your details and start creating, collecting and selling NFTs."
          />
        </Stack>
        <CreateAccountForm />
      </Stack>
    </Stack>
  );
};
