import "@mui-treasury/component-sociallink";
import { Theme, alpha, lighten } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { Components } from "@mui/material/styles/components";

type Output = Required<Pick<Components, "JunSocialLink">>;

export const getSocialLinkRoundStyles = (
  arg: Theme | { theme: Theme }
): CSSObject => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  const extraLightPrimary = alpha(lighten(palette.primary.main, 0.4), 0.72);
  return {
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: 24,
    padding: "8px",
    borderRadius: "8px",
    border: "2px solid",
    borderColor: extraLightPrimary,
    color:
      palette.mode === "dark" ? palette.text.secondary : palette.primary.light,
    transition: "0.3s ease-out",
    "&:not(:first-of-type)": {
      marginLeft: "0.5rem",
    },
    "&:hover, &:focus": {
      boxShadow: `0 0 12px 0 ${palette.divider}`,
      borderColor: palette.text.secondary,
      color: palette.mode === "dark" ? "#fff" : palette.text.primary,
    },
    "&:active": {
      "& $icon": {
        transform: "scale(0.8)",
      },
    },
  };
};

export const getSocialLinkRoundTheme = (theme: Theme): Output => {
  return {
    JunSocialLink: {
      styleOverrides: {
        root: getSocialLinkRoundStyles(theme),
      },
    },
  };
};
