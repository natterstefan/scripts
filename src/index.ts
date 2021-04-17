#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

/** **************************************** */

// Print hello to console
// $ ns-script hello
program
  .command('hello') // sub-command name
  .description('Say hello') // command description
  // function to execute when command is uses
  .action(() => {
    console.log('hello')
  })

// allow commander to parse `process.argv`
program.parse(process.argv)
