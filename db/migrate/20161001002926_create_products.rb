class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :title
      t.float :decimal, :precision => 8, :scale => 2
      t.integer :quantity
      t.boolean :selected

      t.timestamps
    end
  end
end
