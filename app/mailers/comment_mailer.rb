class CommentMailer < ApplicationMailer
    def new_comment(user)
        @user = user
        mail to: user.email, subject: '【お知らせ】メンションされました'

    end
end