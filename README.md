# server-ready-cli

> Run commands only when a server is available

Useful if you want to run things in parallel but need to wait for a server to be ready.

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

## See also

* [server-ready](https://github.com/typicode/server-ready) Programmatic API.
* [npm-run-all](https://github.com/mysticatea/npm-run-all) CLI tool to run multiple npm-scripts in parallel or sequential.

## License

MIT - [Typicode :cactus:](https://github.com/typicode)
