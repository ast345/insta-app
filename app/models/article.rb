class Article < ApplicationRecord
    belongs_to :user
    has_many_attached :photos
    has_many :likes, dependent: :destroy
    has_many :comments, dependent: :destroy
    # scope :featured, order('likes_count DESC')
end
