import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.jsx$/);
  req.keys().forEach(filename => req(filename));
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
