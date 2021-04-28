import React from 'react';
import { GlobalStyle } from '../src/shared/global';
import serviceReportTheme from './designSystemTheme';
const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');
addDecorator(jsxDecorator);
// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  docs: {
    theme: serviceReportTheme
  },
  layout: 'fullscreen',
}