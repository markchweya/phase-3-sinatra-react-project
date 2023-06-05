class ChangeStateToCityInAddresses < ActiveRecord::Migration[6.1]
    def change
      rename_column :addresses, :state, :county
    end
  end