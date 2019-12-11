defmodule PhoenixReactStarter.Repo.Migrations.Initial do
  use Ecto.Migration

  def change do
    create table(:post) do
      add :title, :string, null: false
      add :description, :string, null: false, default: ""
      add :body, :string, null: false, default: ""
      add :created_at, :utc_datetime, null: false, default: fragment("now()")
      add :modified_at, :utc_datetime, null: false, default: fragment("now()")
    end
  end
end
