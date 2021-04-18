#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * TODO: add figlet (https://itnext.io/how-to-create-your-own-typescript-cli-with-node-js-1faf7095ef89)
 */
import { Command } from 'commander'

const program = new Command()
const normalizedPath = require('path').join(__dirname)

require('fs')
  .readdirSync(`${normalizedPath}/git`)
  .forEach((file: string) => {
    if (file.endsWith('.d.ts')) {
      // do not handle decleration files
      return
    }
    require(`./git/${file}`)(program)
  })

program.parse(process.argv)
