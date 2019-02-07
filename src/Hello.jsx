// @flow

import * as React from 'react';

type HelloProps = {
  name: string,
  onClick?: (event: SyntheticEvent<HTMLSpanElement>) => void,
};

export const Hello = ({ name, onClick }: HelloProps) => (
  <button type="button" onClick={onClick}>
    Hello {name}!
  </button>
);

Hello.defaultProps = {
  onClick: () => {},
};
