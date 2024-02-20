import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

export type TextFontFamily = 'work' | 'space';
export type TextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'largeBase' | 'base' | 'caption';
export type TextColor = 'white' | 'gray';
export type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
  className?: string;
  family?: TextFontFamily;
  size?: TextSize;
  color?: TextColor;
  align?: TextAlign;
  text: string;
}

export const Text = memo(function Text(props: TextProps) {
  const { className, family = 'work', size = 'base', color = 'white', align = 'left', text } = props;
  const additionals = [className, cls[family], cls[size], cls[color], cls[align]];
  return <p className={classNames(cls.Text, {}, additionals)}>{text}</p>;
});
