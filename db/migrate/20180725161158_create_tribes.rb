class CreateTribes < ActiveRecord::Migration[5.2]
  def change
    create_table :tribes do |t|
      t.string :tribe_name
      t.string :body_paint
      t.string :crest
      t.string :village

      t.timestamps
    end
  end
end
