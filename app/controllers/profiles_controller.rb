class ProfilesController < ApplicationController
	before_action :authenticate_user!

	def show
	end

	def edit
        @profile = current_user.prepare_profile
        @user = current_user
	end

    def update
        @profile = current_user.prepare_profile
        @profile.assign_attributes(profile_params)
        if @profile.save
          redirect_to profile_path, notice: 'アバター登録完了'
        else
          flash.now[:error] = 'アバターが登録できませんでした'
          render :edit
        end
    end

    private
    def profile_params
        params.require(:profile).permit(
            :avatar
        )
    end
end