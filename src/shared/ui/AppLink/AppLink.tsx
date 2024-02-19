import { type ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Link } from 'atomic-router-react';

interface AppLinkProps{
  className?: string;
  to: string;
  children: ReactNode;
}

export const AppLink = memo(function AppLink(props: AppLinkProps) {
  const { className, to, children } = props;
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className])}>
      {children}
    </Link>
  );
});
