class ProfileSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :avatar_url

  def avatar_url
    url_for(object.avatar) if object.avatar.attached?
  end

  belongs_to :user
end
