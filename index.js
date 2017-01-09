#!/usr/bin/env node
const execa = require('execa')
const serverReady = require('server-ready')

const argv = require('yargs')
  .usage('Usage: $0 -p <port> -- <cmd>')
  .help('h')
  .alias('h', 'help')
  .version()
  .alias('v', 'version')
  .option('p', {
    alias: 'port',
    demand: true,
    default: 3000,
    type: 'number',
    nargs: 1
  })
  .option('t', {
    alias: 'timeout',
    default: 10000,
    description: 'timeout in ms',
    type: 'number',
    nargs: 1
  })
  .demandCommand(1)
  .argv

serverReady.timeout = argv.timeout

serverReady(argv.port, (err) => {
  if (err) {
    console.error(
      `server-ready - can't connect to port ${argv.port} (timeout ${serverReady.timeout}ms)`
    )
    process.exit(1)
  }

  execa.shellSync(argv._.join(' '), { stdio: 'inherit' })
})
