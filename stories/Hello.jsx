import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Hello } from '../src';

storiesOf('Hello', module)
  .add('with text', () => <Hello name="test" />)
  .add('with click handler', () => (
    <Hello name="click me" onClick={action('button-click')} />
  ));
