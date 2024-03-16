import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { AppImage } from "@/shared/ui/AppImage";
import cls from "./ArtistBanner.module.scss";
import { type ReactNode } from "react";

interface ArtistBannerProps {
  src?: string;
  className?: string;
}

export const ArtistBanner = (props: ArtistBannerProps): ReactNode => {
  const { src, className } = props;
  return (
    <div className={classNames(cls.ArtistBanner, {}, [className])}>
      <AppImage src={src} className={cls.image} />
    </div>
  );
};
