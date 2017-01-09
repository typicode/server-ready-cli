const assert = require('assert')
const http = require('http')
const execa = require('execa')

const result = execa.sync('node', [
  'index.js',
  '--port', '4000',
  '--timeout', '1000',
  '--', 'echo ok'
])
assert.equal(result.status, 1)
assert.equal(result.stdout, '')
assert.notEqual(result.stderr, '')

http.createServer((req, res) => {
  res.end()
}).listen(4000, () => {
  console.log('Server listening')
  const result = execa.sync('node', [
    'index.js',
    '--port', '4000',
    '--timeout', '1000',
    '--', 'echo ok'
  ])
  assert.equal(result.status, 0)
  assert(result.stdout.includes('ok'))
  process.exit(0)
})
