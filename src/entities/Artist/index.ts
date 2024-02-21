export type { Artist } from './model/types';

export {
  $allArtists,
  $artist,
  $someArtists,
  getAllArtistsFx,
  getArtistDataByIdFx,
  getSomeArtistsFx,
  loadAllArtistsTriggered,
  loadArtistTriggered,
  loadSomeArtistsTriggered,
} from './model/store';

export { ArtistCard } from './ui/ArtistCard/ArtistCard';

export { ArtistTag } from './ui/ArtistTag/ArtistTag';

export { ArtistAvatar } from './ui/ArtistAvatar/ArtistAvatar';