// @flow

import * as React from 'react';

type HelloProps = {
  name: string,
  onClick?: (event: SyntheticEvent<HTMLSpanElement>) => void,
};

export const Hello = ({ name, onClick }: HelloProps) => (
  <span onClick={onClick}>Hello {name}!</span>
);

Hello.defaultProps = {
  onClick: () => {},
};
