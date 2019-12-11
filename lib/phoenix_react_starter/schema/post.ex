defmodule PhoenixReactStarter.Schema.Post do
  use Ecto.Schema
  import Ecto.Changeset

  @required_fields [:title, :description, :body]

  @derive {Jason.Encoder,
   only: [
     :id,
     :title,
     :description,
     :body
     #  :created_at,
     #  :modified_at
   ]}

  schema "post" do
    field :title, :string
    field :description, :string
    field :body, :string
    field :created_at, :utc_datetime
    field :modified_at, :utc_datetime
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, @required_fields)
    |> validate_required(@required_fields)
  end
end
