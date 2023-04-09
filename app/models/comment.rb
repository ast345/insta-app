class Comment < ApplicationRecord
    belongs_to :article
    belongs_to :user
    validates :content, presence: true

    after_create :send_email

    private
    def send_email
        # users = User.all
        # users.each do |userdb|
        # if comment.content.include?("happy")
        CommentMailer.new_comment(user, content, article).deliver_later
        # end
    end
end
