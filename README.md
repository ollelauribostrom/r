# ⚛️ r

[![Build Status](https://travis-ci.org/ollelauribostrom/r.svg?branch=master)](https://travis-ci.org/ollelauribostrom/r)
[![Coverage Status](https://coveralls.io/repos/github/ollelauribostrom/r/badge.svg?branch=master)](https://coveralls.io/github/ollelauribostrom/r?branch=master)

Boilerplate for creating/publishing React components.

## Features

- [Rollup](https://rollupjs.org)
- [Flow](http://flow.org/)
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io)
- [Jest](https://jestjs.io) and [Enzyme](https://airbnb.io/enzyme/) for testing
- [Storybook](https://storybook.js.org/) for examples
- [Travis CI](http://travis-ci.org) to run tests -> publish storybook to Github Pages

## Bootstrap a new component

```
mkdir my-awesome-component
cd my-awesome-component
git clone https://github.com/ollelauribostrom/r .
rm -rf ./.git
git init
yarn
```

## Development scripts

- `yarn build`: build your component
- `yarn dev`: run storybook
- `yarn test`: run tests
- `yarn lint`: run eslint
- `yarn typecheck`: run flow

## Contributing

All contributions are very much welcome. Feel free to [open an issue](https://github.com/ollelauribostrom/r/issues/new) or submit a PR if you can think of any way to improve this project.

## License

MIT
