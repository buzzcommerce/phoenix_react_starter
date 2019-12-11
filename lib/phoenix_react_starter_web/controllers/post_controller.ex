defmodule PhoenixReactStarterWeb.PostController do
  use PhoenixReactStarterWeb, :controller
  alias PhoenixReactStarter.Posts

  def index(conn, _params) do
    posts = Posts.list_post()
    conn |> json(posts)
  end

  def create(conn, params) do
    post = Posts.create_post(params)
    conn |> put_status(201) |> json(post)
  end
end
