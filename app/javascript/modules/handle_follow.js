import $ from 'jquery'
import axios from 'modules/axios'

// const listenUnfollowEvent = (accountId) => {
//     $(`#${accountId}` + `.inactive-heart`).on('click', () => {
//         axios.post(`/articles/${articleId}/like`)
//             .then((response) => {
//                 if (response.data.status === 'ok') {
//                     $(`#${articleId}` + `.active-heart`).removeClass('hidden')
//                     $(`#${articleId}` + `.inactive-heart`).addClass('hidden')
//             }
//         })
//             .catch((e) => {
//             window.alert('Error')
//             console.log(e)
//             })
//     })

// }

// const listenFollowEvent = (articleId) => {
//     $(`#${articleId}`+`.active-heart`).on('click', () => {
//         axios.delete(`/articles/${articleId}/like`)
//             .then((response) => {
//                 if (response.data.status === 'ok') {
//                     $(`#${articleId}` + `.active-heart`).addClass('hidden')
//                     $(`#${articleId}` + `.inactive-heart`).removeClass('hidden')
//             }
//         })
//         .catch((e) => {
//         window.alert('Error')
//         console.log(e)
//         })
// })
// }

export {
    listenUnfollowEvent,
    listenFollowEvent
}