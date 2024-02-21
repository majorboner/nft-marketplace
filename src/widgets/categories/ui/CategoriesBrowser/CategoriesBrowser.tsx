import { type ReactNode, memo, useEffect } from "react";
import cls from "./CategoriesBrowser.module.scss";
import { classNames } from "@/shared/lib/helpers/classNames/classNames";
import MusicNotes from "@/shared/assets/icons/music-notes.svg?react";
import PaintBrush from "@/shared/assets/icons/paint-brush.svg?react";
import Camera from "@/shared/assets/icons/camera-photo.svg?react";
import VideoCamera from "@/shared/assets/icons/video-camera.svg?react";
import Basketball from "@/shared/assets/icons/basket-ball.svg?react";
import Planet from "@/shared/assets/icons/planet-x.svg?react";
import MagicWand from "@/shared/assets/icons/magic-wand.svg?react";
import Swatches from "@/shared/assets/icons/swatches-x.svg?react";
import {
  $allCategories,
  getAllCategoriesFx,
  CategoryCard,
  type Category,
  loadAllCategoriesTriggered,
} from "@/entities/Category";
import { useUnit } from "effector-react";
import { Stack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";

interface CategoriesBrowserProps {
  className?: string;
}

export const CategoriesBrowser = memo(function CategoriesBrowser(
  props: CategoriesBrowserProps
) {
  const { className } = props;
  const icons: Array<React.FunctionComponent<React.SVGAttributes<SVGElement>>> =
    [
      PaintBrush,
      Swatches,
      MusicNotes,
      Camera,
      VideoCamera,
      MagicWand,
      Basketball,
      Planet,
    ];
  const [categories, isLoading] = useUnit([
    $allCategories,
    getAllCategoriesFx.pending,
  ]);

  useEffect(() => {
    loadAllCategoriesTriggered();
  }, []);

  const renderCategoryCard = (
    category: Category,
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  ): ReactNode => {
    return <CategoryCard category={category} Svg={Svg} />;
  };

  if (isLoading) {
    return "loading...";
  }

  return (
    <Stack
      direction="column"
      gap="50"
      className={classNames(cls.CategoriesBrowser, {}, [className])}
    >
      <Text text="Browse Categories" size="h3" />
      <Stack gap="30" className={cls.categoriesWrapper}>
        {...categories.map((category, index) =>
          renderCategoryCard(category, icons[index])
        )}
      </Stack>
    </Stack>
  );
});
