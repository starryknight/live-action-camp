class User < ApplicationRecord
    validates :password, confirmation: true
    
    has_many :characters, dependent: :destroy
    has_many :tribes, through: :characters
end
