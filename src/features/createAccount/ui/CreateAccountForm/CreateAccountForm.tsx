import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Stack } from "@/shared/ui/Stack";
import { type ReactNode } from "react";
import UserIcon from "@/shared/assets/icons/User.svg";
import LetterIcon from "@/shared/assets/icons/EnvelopeSimple.svg";
import LockIcon from "@/shared/assets/icons/LockKey.svg";
import { Icon } from "@/shared/ui/Icon";

export const CreateAccountForm = (): ReactNode => {
  return (
    <Stack direction="column" gap="30">
      <Stack direction="column" gap="15">
        <Input LeftIcon={<Icon Svg={UserIcon} />} placeholder="Username" />
        <Input
          LeftIcon={<Icon Svg={LetterIcon} />}
          placeholder="Email Address"
        />
        <Input LeftIcon={<Icon Svg={LockIcon} />} placeholder="Password" />
        <Input
          LeftIcon={<Icon Svg={LockIcon} />}
          placeholder="Confirm Password"
        />
      </Stack>
      <Button size="tertiary" variant="filled" maxWidth>
        Create Account
      </Button>
    </Stack>
  );
};
