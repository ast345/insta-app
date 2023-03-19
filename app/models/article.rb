class Article < ApplicationRecord
    belongs_to :user
    has_many_attached :photos
    has_many :likes, dependent: :destroy
end
