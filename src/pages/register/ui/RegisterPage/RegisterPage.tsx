import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import { SignUp } from "@/widgets/register";
import { type ReactNode } from "react";

interface RegisterPageProps {
  className?: string;
}

export const RegisterPage = (props: RegisterPageProps): ReactNode => {
  const { className } = props;
  return (
    <div className={classNames("", {}, [className])}>
      <SignUp />
    </div>
  );
};
