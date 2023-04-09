class CommentMailer < ApplicationMailer
    def new_comment(user, content, article)
        @user = user
        @content = content
        @article_user = article.user.account_name
        mail to: user.email, subject: '【お知らせ】メンションされました'
    end
end