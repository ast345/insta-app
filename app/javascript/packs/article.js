import $ from 'jquery'
import axios from 'modules/axios'

import {
    listenInactiveHeartEvent,
    listenActiveHeartEvent
} from 'modules/handle_heart'

const handleHeartDisplay = (hasLiked, articleId) => {
    if (hasLiked) {
      $(`#${articleId}` + `.active-heart`).removeClass('hidden')
    } else {
      $(`#${articleId}` + `.inactive-heart`).removeClass('hidden')
    }
  }

  const appendNewComment = (comment) => {
    $('.comments-container').append(
      `<div class="article_comment"><img src="${comment.user.profile.avatar_url}" class='article_user_avatar'><p class='comment_account_name'>${comment.user.account_name}</p><p class='comment_content'>${comment.content}</p></div>`
    )
  }

  document.addEventListener('DOMContentLoaded', () => {

    $('.card').each(function(index, element){
      const dataset = $(element).data()
      const articleId = dataset.articleId

      axios.get(`/api/articles/${articleId}/like`)
        .then((response) => {
              const hasLiked = response.data.hasLiked
              const articleId = response.data.articleId
              handleHeartDisplay(hasLiked, articleId)
        })

      listenInactiveHeartEvent(articleId)
      listenActiveHeartEvent(articleId)


    })
    
    const dataset = $('#article-show').data()
    const articleId = dataset.articleId

    axios.get(`/api/articles/${articleId}/comments`)
        .then((response) => {
            const comments = response.data
            comments.forEach((comment) => {
                appendNewComment(comment)
              })
        })
        .catch((error)=> {
            window.alert('失敗')
        })

    $('.add-comment-button').on('click', () => {
        const content = $('#comment_content').val()
        if (!content) {
            window.alert('コメントを入力してください')
        } else {
            axios.post(`/api/articles/${articleId}/comments`, {
            comment: {content: content}
            })
            .then((res) => {
                const comment = res.data
                appendNewComment(comment)
                $('#comment_content').val('')
            })
        }
        })

        // axios.get(`/articles/${articleId}/like`)
        // .then((response) => {
        //       const hasLiked = response.data.hasLiked
        //       handleHeartDisplay(hasLiked)
        // })



})