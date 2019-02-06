// @flow

import React from 'react';

type HelloProps = {
  name: string,
};

export const Hello = ({ name }: HelloProps) => <span>Hello {name}!</span>;
