# @natterstefan/scripts

[![npm version](https://badge.fury.io/js/%40natterstefan%2Fscripts.svg)](https://badge.fury.io/js/%40natterstefan%2Fscripts)
[![Node CI](https://github.com/natterstefan/scripts/actions/workflows/ci.yml/badge.svg)](https://github.com/natterstefan/scripts/actions/workflows/ci.yml)
[![GitHub issues](https://img.shields.io/github/issues/natterstefan/scripts)](https://github.com/natterstefan/scripts/issues)
[![GitHub license](https://img.shields.io/github/license/natterstefan/scripts)](https://github.com/natterstefan/scripts/blob/main/LICENSE)

![natterstefan/nextjs-template](./assets/github.png)

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
npx @natterstefan/scripts --help

# install globally
npm i @natterstefan/scripts -g
@natterstefan/scripts --help
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://natterstefan.me/"><img src="https://avatars.githubusercontent.com/u/1043668?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stefan Natter</b></sub></a><br /><a href="#ideas-natterstefan" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!