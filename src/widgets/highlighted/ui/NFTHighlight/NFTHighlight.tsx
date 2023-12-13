import { memo, useEffect } from 'react';
import cls from './NFTHighlight.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '@/shared/ui/Stack';
import { Timer } from '@/shared/ui/Timer';
import { ArtistTag } from '@/entities/Artist';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import EyeIcon from '@/shared/assets/icons/Eye.svg';
import { $highlightedNft, getHighlightedNftByIdFx, loadHighlightedNft } from '../../model/store';
import { useUnit } from 'effector-react';
import { AppImage } from '@/shared/ui/AppImage';

interface NFTHighlightProps {
  className?: string;
}

export const NFTHighlight = memo(function NFTHighlight(props: NFTHighlightProps) {
  const { className } = props;
  const [highlightedNft, isLoading] = useUnit([$highlightedNft, getHighlightedNftByIdFx.pending]);

  useEffect(() => {
    loadHighlightedNft(1);
  }, []);

  if (isLoading) {
    return 'loading...';
  }

  return (
    <Stack maxWidth className={classNames(cls.NFTHighlight, {}, [className])}>
      <AppImage src={highlightedNft.img} className={cls.img} />
      <Stack maxWidth className={cls.content} align="end" justify="center">
        <Stack direction="column" gap="30" className={cls.info}>
          <ArtistTag artist={highlightedNft.artist} className={cls.tag} />
          <Text text={highlightedNft.name} size="h2" />
          <Button size="secondary" variant="filledWhite" Icon={EyeIcon}>
            See NFT
          </Button>
        </Stack>
        <Timer />
      </Stack>
    </Stack>
  );
});
