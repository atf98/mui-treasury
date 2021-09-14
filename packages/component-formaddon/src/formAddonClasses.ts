import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@mui/core";

export function getFormAddonUtilityClass(slot: string) {
  return generateUtilityClass("JunFormAddon", slot);
}

export const formAddonClasses = generateUtilityClasses("JunFormAddon", [
  "root",
  "borderless",
]);
