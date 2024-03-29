import { memo } from "react";
import cls from "./HeroSection.module.scss";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { Stack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { Button } from "@/shared/ui/Button";
import RocketLaunchIcon from "@/shared/assets/icons/rocket-launch.svg?react";
import { HighlightedNFT } from "@/entities/NFT/ui/HighlightedNFT/HighlightedNFT";
import { Info } from "@/shared/ui/Info";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection = memo(function HeroSection(props: HeroSectionProps) {
  const { className } = props;
  return (
    <Stack gap="30" className={classNames(cls.HeroSection, {}, [className])}>
      <Stack gap="30" direction="column">
        <Stack gap="20" direction="column">
          <Text text="Discover digital art & Collect NFTs" size="h1" />
          <Text text="NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists." />
        </Stack>
        <Button size="secondary" variant="filled" Icon={RocketLaunchIcon}>
          Get Started
        </Button>
        <Stack gap="30">
          <Info header="240k+" desc="Total Sale" />
          <Info header="100k+" desc="Auctions" />
          <Info header="240k+" desc="Artists" />
        </Stack>
      </Stack>
      <div>
        <HighlightedNFT />
      </div>
    </Stack>
  );
});
