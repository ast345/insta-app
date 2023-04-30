require 'rails_helper'

RSpec.describe 'Articles', type: :request do
  let!(:user) { create(:user) }
  let!(:articles) { create_list(:article, 3, user:user)}

  describe 'GET /articles' do
    it '200ステータスが返ってくる' do
      get articles_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /articles' do
		context 'ログインしている場合' do
			before do
				sign_in user
			end

	    it '記事が保存される' do
        file_path = Rails.root.join('spec', 'fixtures', 'files', 'IMG_1016.JPG')
        file = fixture_file_upload(file_path, 'image/jpg')
        article_params = {"sentence" => "テスト投稿２", "photos" => [file]}
	      post articles_path, params: { article: article_params }
	      expect(response).to have_http_status(302)
				expect(Article.last.sentence).to eq(article_params["sentence"])
	    end
		end
  end
end
