
class CreateAddresses < ActiveRecord::Migration[6.1]
    def change
      create_table "addresses", force: :cascade do |t|
        t.string "street"
        t.string "city"
        t.string "state"
        t.string "zip"
        t.references :contact, foreign_key: true
        t.timestamps
      end
    end
  end