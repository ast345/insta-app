class Photo < ApplicationRecord
    has_many_attached :image
end