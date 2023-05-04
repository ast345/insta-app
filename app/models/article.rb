class Article < ApplicationRecord
    belongs_to :user
    has_many_attached :photos
    has_many :likes, dependent: :destroy
    has_many :comments, dependent: :destroy
    # scope :featured, order('likes_count DESC')
    validates :sentence, length: {minimum: 2}
    validates :photos, presence: true, blob: { content_type: :image }
    validates_with BlobValidator
end
