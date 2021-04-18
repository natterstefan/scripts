#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */

import { Command } from 'commander'
import chalk from 'chalk'

import pkg from '../package.json'

import gitVersion from './git/version'

const program = new Command()

// setup commands
gitVersion(program)

program
  .version(pkg.version)
  .description(pkg.description)
  .addHelpText('beforeAll', () =>
    chalk.black(chalk.bgHex('#FAC151')('\n-- @natterstefan/scripts --\n')),
  )

program.parse(process.argv)
