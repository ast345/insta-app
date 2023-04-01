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
        if @comment.save
            redirect_to article_path(article), notice: 'コメントを追加'
        else
            flash.now[:error] = '保存できませんでした'
            render :new
        end
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