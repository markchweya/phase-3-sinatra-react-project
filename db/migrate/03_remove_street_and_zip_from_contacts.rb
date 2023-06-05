
class RemoveStreetAndZipFromContacts < ActiveRecord::Migration[6.1]
    def change
      remove_column :addresses, :street
      remove_column :addresses, :zip
    end
  end