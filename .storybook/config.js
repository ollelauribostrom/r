import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

function loadStories() {
  require('../stories/Hello.jsx');
}

addDecorator(
  withOptions({
    name: 'Example',
    url: '#',
    enableShortcuts: false,
    showSearchBox: false,
  }),
);

configure(loadStories, module);
