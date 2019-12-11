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

## Getting started

### Quick

If you are in rush and want try out, follow the steps below:

- Make sure that you have `docker` & `docker-compose` installed on your machine
- Make sure that `elixir` is installed
- `git clone https://github.com/buzzcommerce/phoenix_react_starter.git && cd phoenix_react_starter`
- `cd stacks/rush`
- Start docker `docker-compose up`
- Open new terminal, run `DATABASE_URL="ecto://postgres:postgres@localhost:5434/phoenix_react_starter" MIX_ENV=prod mix ecto.migrate` to migrate the database

### Development

- Make sure that your computer have `elixir`, `node` and `postgres` installed
- Correct the database in `config/dev.exs`
- Run `mix phx.server`

### Production

## Work with docker

### Build Docker Image

- `docker build -t phoenix-react-starter .`

### Test that the image is work correctly

In case you want to test that docker image work properly in local machine.

- Navigate to `stack/staging`, run `docker-compose up`, we will have production postgres start at post 5434
- Run migration `DATABASE_URL="ecto://postgres:postgres@localhost:5434/phoenix_react_starter" MIX_ENV=prod mix ecto.migrate`
