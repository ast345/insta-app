class CommentMailer < ApplicationMailer
    def new_comment(user, content, article)
        @user = user
        @content = content
        @article = article
        mail to: user.email, subject: '【お知らせ】メンションされました'
    end
end