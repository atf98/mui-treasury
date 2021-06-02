import {
  generateUtilityClass,
  generateUtilityClasses,
} from "@material-ui/unstyled";

export function getEmailSubscribeUtilityClass(slot: string) {
  return generateUtilityClass("JunEmailSubscribe", slot);
}

export const emailSubscribeClasses = generateUtilityClasses(
  "JunEmailSubscribe",
  ["form", "input", "submit"]
);