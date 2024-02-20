import { memo } from "react";
import cls from "./NavBar.module.scss";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { Link } from "atomic-router-react";
import { aboutRoute } from "@/pages/about";
import { mainRoute } from "@/pages/main";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button";
import UserIcon from "@/shared/assets/icons/User.svg";
import { AppLogo } from "@/shared/ui/AppLogo";
import { registerRoute } from "@/pages/register";

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(function NavBar(props: NavBarProps) {
  const { className } = props;
  return (
    <Stack
      direction="row"
      align="center"
      justify="between"
      maxWidth
      className={classNames(cls.NavBar, {}, [className])}
    >
      <AppLogo />
      <Stack align="center" gap="10">
        <Link to={mainRoute} className={cls.link}>
          Marketplace
        </Link>
        <Link to={aboutRoute} className={cls.link}>
          Rankings
        </Link>
        <Link to={aboutRoute} className={cls.link}>
          Connect a wallet
        </Link>
        <Link to={registerRoute}>
          <Button size="secondary" variant="filled" Icon={UserIcon}>
            Sign Up
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
});
