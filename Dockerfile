# ---- Build Stage ----
FROM elixir:1.9 AS app_builder

ENV MIX_ENV=prod

# Install hex and rebar
RUN mix local.hex --force && \
  mix local.rebar --force

# Create the application build directory
RUN mkdir /app
WORKDIR /app

# Fetch the application dependencies and build the application
COPY mix.exs .
COPY mix.lock .
RUN mix deps.get
RUN mix deps.compile

# Copy over all the necessary application files and directories
COPY config ./config
COPY lib ./lib
COPY priv ./priv

RUN mix phx.digest
RUN mix release

# Build Production App
FROM debian:stretch-slim

ENV LANG=C.UTF-8

# Install openssl
RUN apt-get update && apt-get install -y openssl

# RUN useradd --create-home app
WORKDIR /home/app
COPY --from=app_builder /app/_build .
# RUN chown -R app: ./prod
# USER app

# Run the Phoenix app
CMD ["./prod/rel/phoenix_react_starter/bin/phoenix_react_starter", "start"]
