import { memo } from "react";
import cls from "./ArtistPage.module.scss";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { ArtistAvatar, ArtistBanner } from "@/entities/Artist";

interface ArtistPageProps {
  className?: string;
}

export const ArtistPage = memo(function ArtistPage(props: ArtistPageProps) {
  const { className } = props;
  return (
    <div className={classNames(cls.ArtistPage, {}, [className])}>
      <div className={cls.header}>
        <ArtistBanner src="https://roco.studio/wp-content/uploads/2014/12/img_banner-thin_mountains.jpg" />
        <ArtistAvatar
          src="https://as2.ftcdn.net/v2/jpg/01/74/35/41/1000_F_174354171_dxcNdq4XMmARKT7E88NOLmdrv6BBSAww.jpg"
          className={cls.avatar}
        />
      </div>
    </div>
  );
});
