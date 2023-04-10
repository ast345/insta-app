class Comment < ApplicationRecord
    belongs_to :article
    belongs_to :user
    validates :content, presence: true

    after_create :send_email

    private
    def send_email
        @Users = User.all
        @Users.each do |each_user|
            if content.include?("@#{each_user.account_name}")
                CommentMailer.new_comment(user, content, each_user, article).deliver_later
            end
        end
    end
end
