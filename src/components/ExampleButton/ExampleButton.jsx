// @flow

import * as React from 'react';

type ExampleButtonProps = {
  text: string,
  onClick?: (event: SyntheticEvent<HTMLSpanElement>) => void,
};

export const ExampleButton = ({ text, onClick }: ExampleButtonProps) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

ExampleButton.defaultProps = { onClick: () => {} };
