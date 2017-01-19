# server-ready-cli [![Build Status](https://travis-ci.org/typicode/server-ready-cli.svg?branch=master)](https://travis-ci.org/typicode/server-ready-cli)

> Run commands only when a server is available

Useful if you want to run things in parallel but need to wait for a server to be ready.

_See [server-ready](https://github.com/typicode/server-ready) for the programmatic API._

## Install

```sh
$ npm install -g server-ready-cli
```

## Usage

```sh
$ server-ready --port 3000 -- some-command
```

## Example

In your `package.json`, you can use `server-ready-cli` to run `client` only when `server` is available.

```json
{
  "scripts": {
    "client": "server-ready --port 3000 -- node client.js",
    "server": "node server.js",
    "start": "npm run server & npm run client & wait"
  }
}
```

__Tip__ `server-ready-cli` works well with [npm-run-all](https://github.com/mysticatea/npm-run-all).

## License

MIT - [Typicode :cactus:](https://github.com/typicode)
