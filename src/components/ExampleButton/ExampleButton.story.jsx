import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ExampleButton } from '.';

storiesOf('ExampleButton', module)
  .add('with text', () => <ExampleButton text="test" />)
  .add('with click handler', () => (
    <ExampleButton text="click me" onClick={action('button-click')} />
  ));
