import { Stack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { type ReactNode } from "react";

export const WalletsSignUp = (): ReactNode => {
  return (
    <Stack direction="column" gap="20">
      <Text text="Metamask" />
      <Text text="Wallet Connect" />
      <Text text="Coinbase" />
    </Stack>
  );
};
