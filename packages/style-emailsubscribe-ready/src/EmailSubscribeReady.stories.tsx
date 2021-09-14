import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { useTheme } from "@mui/material/styles";

import * as EmailSubscribe from "@mui-treasury/component-emailsubscribe";

import {
  getEmailSubscribeReadyStyles,
  getEmailSubscribeReadyTheme,
} from "@mui-treasury/style-emailsubscribe-ready";

import { withMuiThemeProvider } from "stories/_internal/decorators";

export default {
  title: "Component/EmailSubscribe/style-packages",
  argTypes: {
    onSubmit: { action: "submitted" },
  },
  args: {},
  parameters: {
    layout: "centered",
  },
} as Meta;

export const Ready: Story = (args) => {
  const theme = useTheme();
  const styles = getEmailSubscribeReadyStyles(theme);
  return (
    <>
      <EmailSubscribe.Form onSubmit={args.onSubmit} sx={styles}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribe.Form>
      <br />
      <EmailSubscribe.Form onSubmit={args.onSubmit}>
        <EmailSubscribe.Input />
        <EmailSubscribe.Submit />
      </EmailSubscribe.Form>
    </>
  );
};
Ready.decorators = [
  withMuiThemeProvider((theme) => {
    theme.components = {
      ...theme.components,
      ...getEmailSubscribeReadyTheme(theme),
    };
    return theme;
  }),
];
