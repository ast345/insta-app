class CommentMailer < ApplicationMailer
    def new_comment(user, content)
        @user = user
        @content = content
        mail to: user.email, subject: '【お知らせ】メンションされました'
    end
end