import $ from 'jquery'
import axios from 'modules/axios'

const listenInactiveHeartEvent = (articleId) => {
    $('.inactive-heart').on('click', () => {
        axios.post(`/articles/${articleId}/like`)
            .then((response) => {
                if (response.data.status === 'ok') {
                    $('.active-heart' + `#${articleId}`).removeClass('hidden')
                    $('.inactive-heart' + `#${articleId}`).addClass('hidden')
            }
        })
            .catch((e) => {
            window.alert('Error')
            console.log(e)
            })
    })

}

const listenActiveHeartEvent = (articleId) => {
    $('.active-heart').on('click', () => {
        axios.delete(`/articles/${articleId}/like`)
            .then((response) => {
                if (response.data.status === 'ok') {
                    $('.active-heart' + `#${articleId}`).addClass('hidden')
                    $('.inactive-heart' + `#${articleId}`).removeClass('hidden')
            }
        })
        .catch((e) => {
        window.alert('Error')
        console.log(e)
        })
})
}

export {
    listenInactiveHeartEvent,
    listenActiveHeartEvent
}