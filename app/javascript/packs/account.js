import $ from 'jquery'
import axios from 'modules/axios'

window.addEventListener('DOMContentLoaded', () => {
    const dataset = $('#account-show').data()
    const accountId = dataset.accountId
    const currentuserId = dataset.currentUserId
    let followerCount = dataset.followerCount

    axios.get(`/accounts/${accountId}/follows/${currentuserId}`)
        .then((response) => {
            const hasFollowed = response.data.hasFollowed
            if (hasFollowed){
                $('.unfollow-button').removeClass('hidden')
            } else {
                $('.follow-button').removeClass('hidden')
            }
        })

        $('.unfollow-button').on('click', () =>{
            axios.post(`/accounts/${accountId}/unfollows`)
            .then((response) => {
                if (response.data.status === 'ok') {
                    $('.follow-button').removeClass('hidden')
                    $('.unfollow-button').addClass('hidden')
                    followerCount = followerCount-1
                    $('.follower_count').html(`${followerCount}`)
                }
            })
            .catch((e) => {
                window.alert('Error')
                console.log(e)
            })
    });

    $('.follow-button').on('click', () =>{
        axios.post(`/accounts/${accountId}/follows`)
            .then((response) => {
                if (response.data.status === 'ok') {
                    $('.follow-button').addClass('hidden')
                    $('.unfollow-button').removeClass('hidden')
                    followerCount = followerCount+1
                    $('.follower_count').html(`${followerCount}`)
                }
            })
            .catch((e) => {
                window.alert('Error')
                console.log(e)
            })
    });

});

