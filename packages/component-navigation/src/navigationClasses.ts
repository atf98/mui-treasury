import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@mui/core";

export function getNavigationUtilityClass(slot: string) {
  return generateUtilityClass("JunNavigation", slot);
}

export const navigationClasses = generateUtilityClasses("JunNavigation", [
  "root",
  "item",
]);