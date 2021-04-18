#!/usr/bin/env node

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
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
