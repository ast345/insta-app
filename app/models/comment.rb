class Comment < ApplicationRecord
    belongs_to :article
    belongs_to :user
    validates :content, presence: true

    after_create :send_email

    private
    def send_email
        CommentMailer.new_comment(user).deliver_later
    end
end
