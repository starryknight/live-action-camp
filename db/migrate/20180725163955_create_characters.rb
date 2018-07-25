class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :character_name
      t.string :status
      t.string :weapon
      t.string :avatar
      t.references :user, foreign_key: true
      t.references :tribe, foreign_key: true

      t.timestamps
    end
  end
end
