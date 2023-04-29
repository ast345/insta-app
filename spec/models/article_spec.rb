require 'rails_helper'

RSpec.describe Article, type: :model do

  let!(:user) { create(:user) }
  let!(:article) {build(:article, user:user) }

	it '画像と説明が記入されていれば、投稿を保存できる' do
		expect(article).to be_valid
	end
end
