defmodule PhoenixReactStarterWeb.PageController do
  use PhoenixReactStarterWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
