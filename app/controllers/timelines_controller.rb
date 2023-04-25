class TimelinesController < ApplicationController
    before_action :authenticate_user!

    def show
      user_ids = current_user.followings.pluck(:id)
      @articles = Article.where(user_id: user_ids)
      @liked_articles = Article.joins(:likes).group("articles.id").order("count(articles.id) DESC").limit(5)
    end

end