import { AppImage } from "@/shared/ui/AppImage";
import { Stack } from "@/shared/ui/Stack";
import { SubscribeForm } from "@/shared/ui/SubscribeForm";
import { Text } from "@/shared/ui/Text";
import { type ReactNode } from "react";
import cls from "./SubscribeWidget.module.scss";

export const SubscribeWidget = (): ReactNode => {
  return (
    <Stack className={cls.SubscribeWidget}>
      <Stack gap="80" align="center">
        <AppImage className={cls.image} />
        <Stack direction="column" gap="40">
          <Stack direction="column" gap="10">
            <Text size="h3" text="Join our weekly digest" />
            <Text text="Get exclusive promotions & updates straight to your inbox." />
          </Stack>
          <SubscribeForm />
        </Stack>
      </Stack>
    </Stack>
  );
};
