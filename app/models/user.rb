class User < ApplicationRecord
    has_many :characters, dependent: :destroy
    has_many :tribes, through: :characters
end
