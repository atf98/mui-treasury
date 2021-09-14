import { CSSInterpolation } from "@mui/system";
import { NavigationClassKey, NavigationProps } from "./Navigation";

type OverridesStyleRules<ClassKey extends string = string> = Record<
  ClassKey,
  CSSInterpolation
>;

declare module "@mui/material/styles/components" {
  interface Components {
    JunNavigation?: {
      defaultProps?: Partial<NavigationProps>;
      styleOverrides?: Partial<OverridesStyleRules<NavigationClassKey>>;
    };
  }
}
