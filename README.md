# @natterstefan/scripts

[![Node CI](https://github.com/natterstefan/scripts/actions/workflows/ci.yml/badge.svg)](https://github.com/natterstefan/scripts/actions/workflows/ci.yml)

Utility package for several scripts I use throughout the day.

## Setup

```bash
yarn
```

## Build

```bash
yarn build
```

## Start

```bash
# development
yarn dev

# production
yarn build
node build/bin/index.js
```

## Usage

### CLI

```bash
# with npx
npx ns-scripts [command]

# install globally
npm i ns-scripts -g
ns-scripts [command]
```

### Node

```js
const { getGitVersion } = require('@natterstefan/scripts/git');
console.log(getGitVersion());
```

## Publish

[semantic-release](https://github.com/semantic-release) is used to deploy and
publish the package. See corresponding GitHub workflow [release.yml](.github/workflows/release.yml).

## References

- [react-scripts](https://github.com/facebook/create-react-app/tree/fddce8a9e21bf68f37054586deb0c8636a45f50b/packages/react-scripts)
- [git-js](https://github.com/steveukx/git-js/tree/cb56da3aee76223faf94ed207c28e396620a3eaa)

## License

[Apache 2.0](LICENSE)
