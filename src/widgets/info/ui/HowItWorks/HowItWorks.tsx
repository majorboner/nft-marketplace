import { memo } from "react";
import cls from "./HowItWorks.module.scss";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { Stack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { InfoCard } from "@/shared/ui/InfoCard";

interface HowItWorksProps {
  className?: string;
}

export const HowItWorks = memo(function HowItWorks(props: HowItWorksProps) {
  const { className } = props;
  return (
    <Stack
      direction="column"
      gap="50"
      className={classNames(cls.HowItWorks, {}, [className])}
    >
      <Stack direction="column">
        <Text text="How It Works" size="h3" />
        <Text text="Find out how to get started" />
      </Stack>
      <Stack gap="30" justify="center">
        <InfoCard
          imageSource=""
          heading="Setup Your wallet"
          description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
        />
        <InfoCard
          imageSource=""
          heading="Create Collection"
          description="Upload your work and setup your collection. Add a description, social links and floor price."
        />
        <InfoCard
          imageSource=""
          heading="Start Earning"
          description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
        />
      </Stack>
    </Stack>
  );
});
