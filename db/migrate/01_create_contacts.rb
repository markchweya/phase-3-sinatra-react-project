
class CreateContacts < ActiveRecord::Migration[6.1]
    def change
      create_table "contacts", force: :cascade do |t|
        t.string "first_name"
        t.string "last_name"
        t.string "email"
        t.references :category, foreign_key: true
        t.timestamps
      end
    end
  end