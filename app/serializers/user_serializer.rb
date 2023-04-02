class UserSerializer < ActiveModel::Serializer
  attributes :id, :account_name

  has_one :profile, serializer: ProfileSerializer
end
