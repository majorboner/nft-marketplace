import { useId, type ReactNode, useState, type ChangeEvent } from "react";
import { Button } from "../Button";
import LetterIcon from "../../assets/icons/EnvelopeSimple.svg";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import cls from "./SubscribeForm.module.scss";

interface SubscribeFormProps {
  className?: string;
}

export const SubscribeForm = (props: SubscribeFormProps): ReactNode => {
  const { className } = props;
  const id = useId();
  const [email, setEmail] = useState<string>("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  return (
    <label
      htmlFor={id}
      className={classNames(cls.SubscribeForm, {}, [className])}
    >
      <input
        id={id}
        type="email"
        value={email}
        onChange={handleInput}
        className={cls.input}
        placeholder="Enter your email here"
      />
      <Button Icon={LetterIcon} size="secondary" variant="filled">
        Subscribe
      </Button>
    </label>
  );
};
