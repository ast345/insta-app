class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.references :user, null: false
      t.text :sentence, null: false
      t.timestamps
    end
  end
end
