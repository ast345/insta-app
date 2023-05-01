import $ from 'jquery'
import axios from 'modules/axios'

const listenInactiveHeartEvent = (articleId) => {
    const selector = `.inactive-heart`+ `#${articleId}`
    console.log(selector)
    $(`#${articleId}` + `.inactive-heart`).on('click', () => {
        axios.post(`/api/articles/${articleId}/like`)
            .then((response) => {
                if (response.data.status === 'ok') {
                    $(`#${articleId}` + `.active-heart`).removeClass('hidden')
                    $(`#${articleId}` + `.inactive-heart`).addClass('hidden')
            }
        })
            .catch((e) => {
            window.alert('Error')
            console.log(e)
            })
    })

}

const listenActiveHeartEvent = (articleId) => {
    $(`#${articleId}`+`.active-heart`).on('click', () => {
        axios.delete(`/api/articles/${articleId}/like`)
            .then((response) => {
                if (response.data.status === 'ok') {
                    $(`#${articleId}` + `.active-heart`).addClass('hidden')
                    $(`#${articleId}` + `.inactive-heart`).removeClass('hidden')
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