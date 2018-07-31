class Character < ApplicationRecord
  validates :name, :weapon, presence: true
  belongs_to :user
  belongs_to :tribe
end
