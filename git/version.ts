import { execSync } from 'child_process'

/**
 * getVersion detects the current version in the git history. It eather returns
 * the current commit hash, the tag (if one exists for the current tag), or the
 * commit hash with the ".dirty" suffix when files have been modified but not
 * pushed yet.
 */
export const getGitVersion = () => {
  // inspired by https://gist.github.com/mjj2000/3ee188cc155c26a118b06116ad0ebd1d
  const version = execSync(
    'git describe --exact-match --tags 2> /dev/null || git rev-parse --short HEAD',
  )
    .toString()
    .trim()
  const isDirty = execSync('git status --porcelain').toString().trim()

  return [version, isDirty.length ? 'dirty' : ''].filter(Boolean).join('.')
}
