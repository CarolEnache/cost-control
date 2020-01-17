import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const req = require.context('../component-library', true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'iphonex'
  }
});

configure(loadStories, module);
