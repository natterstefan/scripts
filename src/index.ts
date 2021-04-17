#!/usr/bin/env node

import { Command } from 'commander'

import { getVersion } from './lib/version'

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
    'returns the current tag, or short hash of the last commit with a dirty flag when files were modified but not committed.',
  )
  // function to execute when command is uses
  .action(() => {
    process.stdout.write(getVersion())
  })

// allow commander to parse `process.argv`
program.parse(process.argv)
