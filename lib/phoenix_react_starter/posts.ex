defmodule PhoenixReactStarter.Posts do
  require Logger

  import Ecto.Query
  alias PhoenixReactStarter.Repo
  alias PhoenixReactStarter.Schema.Post

  def list_post do
    Repo.all(
      from p in Post,
        order_by: [desc: p.created_at]
    )
  end

  def create_post(params) do
    Repo.insert!(%Post{} |> Post.changeset(params))
  end
end
