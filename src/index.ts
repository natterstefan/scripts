#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

/*******************************************/

// Print coffee drinks menu
// $ ns-script helo
program
    .command('hello') // sub-command name
    .description('Say hello') // command description

    // function to execute when command is uses
    .action(function () {
        console.log('hello')
    });


// allow commander to parse `process.argv`
program.parse(process.argv);