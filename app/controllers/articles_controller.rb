class ArticlesController < ApplicationController
    before_action :set_article, only: [:show, :edit, :update]
    before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

    def index
        @articles =Article.all
    end

    def show
        @article = Article.find(params[:id])
    end

    def new
        @article = current_user.articles.build
        @user = current_user
    end

    def create
        @user = current_user
        @article = current_user.articles.build(article_params)
        if @article.save
            redirect_to root_path, notice: '保存できたよ'
        else
            flash.now[:erron] = '保存に失敗しました'
            render :new
        end
    end

    def edit
    end

    def update
        if @article.update(article_params)
            redirect_to article_path(@article), notice: '更新できました'
        else
            flash.now[:erron] = '更新に失敗しました'
            render :edit
        end

    end

    def destroy
        article = Article.find(params[:id])
        article.destroy!
        redirect_to root_path, notice: '記事が削除できました'
    end

    def set_article
        @article = Article.find(params[:id])
    end

    private
    def article_params
        params.require(:article).permit(:sentence, photos: [])
    end
end