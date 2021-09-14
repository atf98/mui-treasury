import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { useTheme } from "@mui/material/styles";

import {
  SocialLink,
  SocialLinkProps,
} from "@mui-treasury/component-sociallink";
import {
  Dribbble,
  FacebookCircle,
} from "@mui-treasury/component-sociallink/icons";

import {
  getSocialLinkRoundTheme,
  getSocialLinkRoundStyles,
} from "@mui-treasury/style-sociallink-round";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/SocialLink/style-packages",
  component: SocialLink,
  argTypes: {},
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Round: Story<SocialLinkProps> = (args) => {
  const theme = useTheme();
  const styles = getSocialLinkRoundStyles(theme);
  return (
    <>
      <SocialLink {...args} sx={styles}>
        <FacebookCircle />
      </SocialLink>
      <SocialLink {...args}>
        <Dribbble />
      </SocialLink>
    </>
  );
};
Round.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getSocialLinkRoundTheme(theme),
    };
    return theme;
  }),
];
