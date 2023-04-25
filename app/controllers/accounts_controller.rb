class AccountsController < ApplicationController

    def show
        @user = User.find(params[:id])
        @articles = @user.articles
        @follower_count = @user.followers.count
        @following_count = @user.followings.count
    end

end