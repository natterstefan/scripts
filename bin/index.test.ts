/**
 * inspired by
 * @see https://fireflysemantics.medium.com/unit-testing-commander-scripts-with-jest-bc32465709d6
 */
import path from 'path'
import { exec, execSync, ExecException } from 'child_process'

describe('CLI', () => {
  function cli(args: any, cwd: any) {
    return new Promise<{
      code: number
      error: ExecException | null
      stdout: string
      stderr: string
    }>(resolve => {
      exec(
        `node ${path.resolve('./build/bin/index.js')} ${args.join(' ')}`,
        { cwd },
        (error, stdout, stderr) => {
          resolve({
            code: error && error.code ? error.code : 0,
            error,
            stdout,
            stderr,
          })
        },
      )
    })
  }

  describe('command git-version', () => {
    beforeEach(() => {
      try {
        execSync('git tag -d 99.99.99 2> /dev/null')
      } catch (err) {
        // e.g. tag does not exist yet
      }
    })

    afterAll(() => {
      execSync('git tag -d 99.99.99')
    })

    it('git-version command should return current commit hash in the console', async () => {
      const result = await cli(['git-version'], '.')
      expect(result.code).toStrictEqual(0)
      // 7 hash and \n
      expect(result.stdout.toString()).toHaveLength(8)
    })

    it('git-version command should return current version in the console', async () => {
      execSync('git tag 99.99.99')

      const result = await cli(['git-version'], '.')
      expect(result.code).toStrictEqual(0)
      expect(result.stdout).toStrictEqual('99.99.99\n')
    })

    describe('handle tags', () => {
      beforeEach(() => {
        execSync('git commit -m "chore: empty" --allow-empty')
        execSync('git tag 99.99.99')
      })

      afterEach(() => {
        execSync('git reset HEAD~1')
      })

      it('returns tag not commit hash when both are present', async () => {
        const result = await cli(['git-version'], '.')
        expect(result.code).toStrictEqual(0)
        expect(result.stdout).toStrictEqual('99.99.99\n')
      })
    })

    describe('dirty state', () => {
      beforeEach(() => {
        execSync('touch dirty.txt')
      })

      afterEach(() => {
        execSync('rm -rf dirty.txt')
      })

      it('returns dirt state', async () => {
        const result = await cli(['git-version'], '.')
        expect(result.code).toStrictEqual(0)
        expect(result.stdout).toContain('.dirty')
      })
    })
  })
})
