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

- Make sure that you have `docker`, `docker-compose` & `elixir` installed on your machine
- `git clone https://github.com/buzzcommerce/phoenix_react_starter.git && cd phoenix_react_starter`
- `cd stacks/rush`

#### Run the migration

Start postgres by `docker-compose run -p 5434:5432 -v ./data/postgres:/var/lib/postgresql/data postgres`

**Uncomment** `import_config "prod.secret.exs"` line in `config/prod.esx` (we need this only to run the ecto migration, otherwise `config/releases.esx` will be use, see detail at Elixir release)

Waiting for the database start properly, migrate the database by issuing

```sh
SECRET_KEY_BASE=vhyElGbFDnexN64uM7OgxpWPinODAxaM8LYklvUbWSThPHa6CWIG7M3vApqINsEc \
DATABASE_URL="ecto://postgres:postgres@localhost:5434/phoenix_react_starter" \
MIX_ENV=prod mix ecto.migrate
```

> You can generate one by calling: mix phx.gen.secret

You wee see the message bellow if database is created successfully!

```
00:20:34.053 [info]  == Running 20191211153919 PhoenixReactStarter.Repo.Migrations.Initial.change/0 forward

00:20:34.053 [info]  create table post

00:20:34.094 [info]  == Migrated 20191211153919 in 0.0s
```

- Close the postgres container

#### Run the docker

- In `stacks/rush`, run `docker-compose up`
- You've done, navigate to `http://localhost:5000`

### Development

- Make sure that your computer have `elixir`, `node` and `postgres` installed
- Correct the database in `config/dev.exs`
- Run `mix phx.server`

### Production

## Work with docker

### Build Docker Image

- Make sure that the line `import_config "prod.secret.exs"` in `config/prod.esx` is **commented**

- `docker build -t phoenix-react-starter .`

### Test that the image is work correctly

In case you want to test that docker image work properly in local machine.

- Navigate to `stack/staging`, run `docker-compose up`, we will have production postgres start at post 5434
- Run migration `DATABASE_URL="ecto://postgres:postgres@localhost:5434/phoenix_react_starter" MIX_ENV=prod mix ecto.migrate`

```

```
