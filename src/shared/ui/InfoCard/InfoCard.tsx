import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { AppImage } from "../AppImage";
import { Stack } from "../Stack";
import { Text } from "../Text";
import cls from "./InfoCard.module.scss";
import { type ReactNode } from "react";

interface InfoCardProps {
  heading: string;
  description: string;
  imageSource: string;
  className?: string;
}

export const InfoCard = (props: InfoCardProps): ReactNode => {
  const { heading, description, imageSource, className } = props;
  return (
    <Stack
      direction="column"
      gap="20"
      className={classNames(cls.InfoCard, {}, [className])}
    >
      <AppImage src={imageSource} className={cls.image} />
      <Stack direction="column" align="center" gap="10">
        <Text text={heading} size="h5" align="center" />
        <Text text={description} align="center" />
      </Stack>
    </Stack>
  );
};
