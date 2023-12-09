import { memo, useEffect } from 'react';
import cls from './HighlightedNFT.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useUnit } from 'effector-react';
import { $nft, getNftByIdFx, loadNftByIdTriggered } from '../../model/store';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { AppImage } from '@/shared/ui/AppImage';
import { ArtistTag } from '@/entities/Artist';

interface HighlightedNFTProps {
  className?: string;
}

export const HighlightedNFT = memo(function HighlightedNFT(props: HighlightedNFTProps) {
  const { className } = props;
  const [nft, isLoading] = useUnit([$nft, getNftByIdFx.pending]);

  useEffect(() => {
    loadNftByIdTriggered(1);
  }, []);

  if (isLoading) {
    return null;
  }

  if (nft.name.length === 0) {
    return null;
  }

  return (
    <Stack direction="column" className={classNames(cls.HighlightedNFT, {}, [className])}>
      <AppImage src={nft.img} alt="" className={cls.img} />
      <Stack gap="10" direction="column" className={cls.info}>
        <Text size="h5" text={nft.name ?? 'Loading...'} />
        <ArtistTag artist={nft.artist} />
      </Stack>
    </Stack>
  );
});
