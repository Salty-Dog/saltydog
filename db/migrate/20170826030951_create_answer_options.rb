class CreateAnswerOptions < ActiveRecord::Migration[5.0]
  def change
    create_table :answer_options do |t|
      t.references :question, foreign_key: true
      t.string :option
      t.integer :low
      t.integer :high

      t.timestamps
    end
  end
end
