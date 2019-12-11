# phoenix_react_starter

Elixir Phoenix with typescript react starter

## Features

- [x] Typescript
- [x] Visual Studio Code, with eslint for typescrript, prettier, ...
- [x] theme-ui (use `@emotion/core` internally)
- [ ] Authentication
- [ ] Hot Reload
- [ ] Docker with elixir release (build small docker image, ~ `120Mb` with `debian`, will be smaller with `alpine`)

## TODO

- Config Hot Reload
- Use `alpine` docker image

## Getting start

### Development

- Make sure that your computer have `elixir`, `node` and `postgres` installed
- Correct the database in `config/dev.exs`
- Run `mix phx.server`

### Production

## Work with docker

### Build Docker Image

- `docker build -t phoenix-react-starter .`

### Test that the image is work correctly

- `cd stack/staging`
- `docker-compose up`
