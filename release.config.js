/**
 * Docs
 * @see https://github.com/semantic-release/semantic-release/blob/971a5e0d16f1a32e117e9ce382a1618c8256d0d9/docs/usage/configuration.md
 *
 * TODO: use shareable config (https://github.com/semantic-release/semantic-release/blob/971a5e0d16f1a32e117e9ce382a1618c8256d0d9/docs/extending/shareable-configurations-list.md)
 */
module.exports = {
  branches: ['main'],
  // eslint-disable-next-line no-template-curly-in-string
  tagFormat: '${version}',
  plugins: [
    // verify commits
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    // generate release notes
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
    // generate CHANGELOG.md
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# @natterstefan/scripts Changelog',
      },
    ],
    // publish on npm
    '@semantic-release/npm',
    // publish a new release on github
    '@semantic-release/github',
    //  commit release assets to the project's git repository.
    '@semantic-release/git',
  ],
}
