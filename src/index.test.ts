/**
 * inspired by
 * @see https://fireflysemantics.medium.com/unit-testing-commander-scripts-with-jest-bc32465709d6
 */
import path from 'path'
import { exec, ExecException } from 'child_process'

describe('CLI', () => {
  function cli(args: any, cwd: any) {
    return new Promise<{
      code: number
      error: ExecException | null
      stdout: string
      stderr: string
    }>(resolve => {
      exec(
        `node ${path.resolve('./bin/index.js')} ${args.join(' ')}`,
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

  it('hello command should return "hello" in the console', async () => {
    const result = await cli(['hello'], '.')
    expect(result.code).toStrictEqual(0)
    expect(result.stdout).toStrictEqual('hello\n')
  })
})
