import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@mui/core";
import { treasuryPalette } from "@mui-treasury/theme-treasury";
export function getStickerUtilityClass(slot) {
  return generateUtilityClass("JunSticker", slot);
}
export const stickerClasses = generateUtilityClasses("JunSticker", [
  "root",
  "none",
  "solid",
  "soft",
  "outlined",
  "round",
  "hasText",
  ...Object.keys(treasuryPalette),
]);
