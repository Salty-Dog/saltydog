class OrderToQuestions < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :order, :integer
    add_index :questions, :order, unique: true
  end
end
