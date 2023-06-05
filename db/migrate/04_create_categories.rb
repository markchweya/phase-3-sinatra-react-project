# db/migrate/202303021544_create_categories.rb

class CreateCategories < ActiveRecord::Migration[6.1]
    def change
      create_table "categories" do |t|
        t.string "name"
        t.timestamps
      end
    end
  end