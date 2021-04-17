#!/usr/bin/env node

import { execSync } from 'child_process'

import { Command } from 'commander'

const program = new Command()

/** **************************************** */

// Print current version
// $ ns-script current-version
// $ ns-script cv
program
  .command('current-version') // sub-command name
  .alias('cv') // alias name
  // command description
  .description(
    'Returns the short hash of the last commit or the current version',
  )
  // function to execute when command is uses
  .action(() => {
    // inspired by https://gist.github.com/mjj2000/3ee188cc155c26a118b06116ad0ebd1d
    const version = execSync(
      'git describe --exact-match --tags 2> /dev/null || git rev-parse --short HEAD',
    )
      .toString()
      .trim()
    const isDirty = execSync('git status --porcelain').toString().trim()
    process.stdout.write([version, isDirty.length ? 'dirty' : ''].join('.'))
  })

// allow commander to parse `process.argv`
program.parse(process.argv)
