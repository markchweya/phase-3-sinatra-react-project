class Contact < ActiveRecord::Base
    belongs_to :category
    has_many :addresses
  end
  