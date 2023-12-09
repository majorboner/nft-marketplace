import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { type Artist } from '../../model/types';
import { type TextFontFamily } from '@/shared/ui/Text/Text';

interface ArtistTagProps {
  className?: string;
  artist: Artist;
  textFamily?: TextFontFamily;
}

export const ArtistTag = memo(function ArtistTag(props: ArtistTagProps) {
  const { className, artist, textFamily = 'work' } = props;
  return (
    <Stack gap="12" className={classNames('', {}, [className])}>
      <Avatar src={artist.avatar} size={24} />
      <Text text={artist.name} family={textFamily} />
    </Stack>
  );
});
