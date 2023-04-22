class UnfollowsController < ApplicationController
    def create
        current_user.unfollow!(params[:account_id])
        render json: {status: 'ok'}
        # redirect_to account_path(params[:account_id])
    end
end