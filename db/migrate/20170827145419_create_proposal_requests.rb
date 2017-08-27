class CreateProposalRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :proposal_requests do |t|

      t.jsonb :request
      t.index :request, using: :gin
      t.timestamps
    end
  end
end
