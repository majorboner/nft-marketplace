import { memo } from 'react';
import cls from './MainPage.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { HeroSection } from '@/widgets/hero';
import { TrendingCollection } from '@/widgets/trending';
import { TopRatedArtits } from '@/widgets/leaderboards';
import { CategoriesBrowser } from '@/widgets/categories';
import { MoreNfts } from '@/widgets/discover';
import { NFTHighlight } from '@/widgets/highlighted';

interface MainPageProps {
  className?: string;
}

export const MainPage = memo(function MainPage(props: MainPageProps) {
  const { className } = props;
  return (
    <div className={classNames(cls.MainPage, {}, [className])}>
      <NFTHighlight />
      <HeroSection />
      <TrendingCollection />
      <TopRatedArtits />
      <CategoriesBrowser />
      <MoreNfts />
    </div>
  );
});
