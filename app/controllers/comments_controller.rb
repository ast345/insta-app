class CommentsController < ApplicationController
    def new
        article = Article.find(params[:article_id])
        @comment = article.comments.build
    end

    def index
        article = Article.find(params[:article_id])
        comments = article.comments
        render json: comments, each_serializer: CommentSerializer, include: { user: [:profile] }
    end

    def create
        article = Article.find(params[:article_id])
        @comment = current_user.comments.new(comment_params)
        @comment.article_id = article.id
        @comment.save!
        render json: @comment, each_serializer: CommentSerializer, include: { user: [:profile] }
    end

    def show
        comments = article.comments
        render json: comments, each_serializer: CommentSerializer, include: { user: [ :profile] }
    end

    private
    def comment_params
	    params.require(:comment).permit(:content)
    end
end