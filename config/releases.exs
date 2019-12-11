import Config

database_url = System.fetch_env!("DATABASE_URL")
secret_key_base = System.fetch_env!("SECRET_KEY_BASE")
app_host = System.fetch_env!("APP_HOST")
app_port = System.fetch_env!("APP_PORT")
pool_size = String.to_integer(System.fetch_env!("DB_POOL_SIZE"))

config :phoenix_react_starter, PhoenixReactStarterWeb.Endpoint,
  http: [:inet6, port: app_port],
  url: [
    host: app_host,
    port: app_port
  ],
  secret_key_base: secret_key_base,
  server: true

config :phoenix_react_starter, PhoenixReactStarter.Repo,
  # ssl: true,
  url: database_url,
  pool_size: pool_size || 10
