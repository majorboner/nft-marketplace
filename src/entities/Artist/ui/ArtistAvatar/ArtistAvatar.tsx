import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { AppImage } from "@/shared/ui/AppImage";
import { type ReactNode } from "react";
import cls from "./ArtistAvatar.module.scss";

interface ArtistAvatarProps {
  src?: string;
  className?: string;
}

export const ArtistAvatar = (props: ArtistAvatarProps): ReactNode => {
  const { src, className } = props;
  return (
    <div className={classNames(cls.ArtistAvatar, {}, [className])}>
      <AppImage src={src} />
    </div>
  );
};
