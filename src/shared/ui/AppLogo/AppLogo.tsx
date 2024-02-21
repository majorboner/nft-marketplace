import { memo } from "react";
import cls from "./AppLogo.module.scss";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { Stack } from "../Stack/Stack";
import AppLogoIcon from "@/shared/assets/icons/app-logo-big.svg?react";
import StorefrontIcon from "@/shared/assets/icons/storefront-x.svg?react";

interface AppLogoProps {
  className?: string;
}

export const AppLogo = memo(function AppLogo(props: AppLogoProps) {
  const { className } = props;
  return (
    <Stack
      align="center"
      gap="12"
      className={classNames(cls.AppLogo, {}, [className])}
    >
      <StorefrontIcon width={32} height={32} className={cls.icon} />
      <AppLogoIcon className={cls.text} />
    </Stack>
  );
});
