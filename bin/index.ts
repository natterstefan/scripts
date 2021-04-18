#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * TODO: add figlet (https://itnext.io/how-to-create-your-own-typescript-cli-with-node-js-1faf7095ef89)
 */
import { Command } from 'commander'

import gitVersion from './git/version'

const program = new Command()

gitVersion(program)

program.parse(process.argv)
