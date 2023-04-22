class FollowsController < ApplicationController
    before_action :authenticate_user!

    def create
        current_user.follow!(params[:account_id])
        render json: { status: 'ok'}
        # redirect_to account_path(params[:account_id])
    end
end