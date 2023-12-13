import { type NFT, getNftById, nftDefaultState } from '@/entities/NFT';
import { createEffect, createEvent, createStore, sample } from 'effector';

export const loadHighlightedNft = createEvent<number>();

export const getHighlightedNftByIdFx = createEffect(async (nftId: number) => {
  const res = await getNftById({ nftId, _expand: 'artist' });
  return res.data;
});

sample({
  clock: loadHighlightedNft,
  fn: (id: number): number => id,
  target: getHighlightedNftByIdFx,
});

export const $highlightedNft = createStore<NFT>(nftDefaultState).on(
  getHighlightedNftByIdFx.doneData,
  (_, payload) => payload
);
