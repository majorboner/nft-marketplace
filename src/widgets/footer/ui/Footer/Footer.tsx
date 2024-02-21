import { AppLogo } from "@/shared/ui/AppLogo";
import { Icon } from "@/shared/ui/Icon";
import { Stack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { type ReactNode } from "react";
import DiscordLogo from "../../../../shared/assets/icons/discord.svg?react";
import InstagramLogo from "../../../../shared/assets/icons/instagram.svg?react";
import YoutubeLogo from "../../../../shared/assets/icons/youtube.svg?react";
import TwitterLogo from "../../../../shared/assets/icons/twitter.svg?react";
import { SubscribeForm } from "@/shared/ui/SubscribeForm";
import cls from "./Footer.module.scss";
import { Link } from "atomic-router-react";

export const Footer = (): ReactNode => {
  return (
    <Stack direction="column" justify="center" gap="50" className={cls.Footer}>
      <Stack justify="between">
        <Stack direction="column" gap="30" className={cls.infoColumn}>
          <AppLogo />
          <Stack direction="column" gap="20">
            <Text
              color="gray"
              text="NFT marketplace UI created with Anima for Figma."
            />
            <Stack direction="column" gap="15">
              <Text color="gray" text="Join our community" />
              <Stack gap="10">
                <Link to="/">
                  <Icon Svg={DiscordLogo} className={cls.icon} />
                </Link>
                <Link to="/">
                  <Icon Svg={InstagramLogo} className={cls.icon} />
                </Link>
                <Link to="/">
                  <Icon Svg={YoutubeLogo} className={cls.icon} />
                </Link>
                <Link to="/">
                  <Icon Svg={TwitterLogo} className={cls.icon} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="column" gap="25" className={cls.exploreColumn}>
          <Text size="h5" family="space" text="Explore" />
          <Stack direction="column" gap="20">
            <Link to={"/"}>
              <Text color="gray" text="Marketplace" />
            </Link>
            <Link to={"/"}>
              <Text color="gray" text="Rankings" />
            </Link>
            <Link to={"/"}>
              <Text color="gray" text="Connect a wallet" />
            </Link>
          </Stack>
        </Stack>

        <Stack direction="column" gap="25">
          <Text size="h5" family="space" text="Join our weekly digest" />
          <Stack direction="column" gap="20">
            <Text
              color="gray"
              text="Get exclusive promotions & updates straight to your inbox."
            />
            <SubscribeForm />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="column" maxWidth className={cls.copyright}>
        <Text
          size="caption"
          color="gray"
          text="&#169; NFT Market. Use this template freely."
        />
      </Stack>
    </Stack>
  );
};
