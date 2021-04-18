import commander from 'commander'

import { getGitVersion } from '../../git/version'

module.exports = (program: commander.Command) => {
  // Prints current git version
  // $ ns-script git-version
  // $ ns-script gv
  program
    .command('git-version') // sub-command name
    .alias('cv') // alias name
    // command description
    .description(
      'returns the current tag, or hash of the last commit with a dirty flag when files were modified but not committed.',
    )
    // function to execute when command is uses
    .action(() => {
      // FYI: process.stdout.write() removes \n at the end of the respons
      console.log(getGitVersion())
    })
}
