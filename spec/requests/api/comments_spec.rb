require 'rails_helper'

RSpec.describe 'Api::Comments', type: :request do
  describe 'GET /api/comments' do
    let!(:user) { create_list(:user, 2) }
    let!(:article) { create(:article, user:user.first)}
    let!(:comments) { create_list(:comment, 3, article: article, user:user.second) }

    it '200status' do
      get api_comments_path(article_id: article.id)
      expect(response).to have_http_status(200)

      body = JSON.parse(response.body)
      expect(body.length).to eq 3
      expect(body[0]['content']).to eq comments.first.content
      expect(body[1]['content']).to eq comments.second.content
      expect(body[2]['content']).to eq comments.third.content
    end
  end
end
