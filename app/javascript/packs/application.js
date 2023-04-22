// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')
require("./slick")


import axios from 'axios'
import $ from 'jquery'
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

window.addEventListener('DOMContentLoaded', () => {
    
    $('.avatar-change').on('change', function (e) {
        console.log(e.target.files);
        if (e.target.files[0].size > 0) {
            $(this).parents('form').submit();
        }
    });
    
    const dataset = $('#account-show').data()
    const accountId = dataset.accountId

    $('.unfollow-button').on('click', () =>{
        axios.post(`/accounts/${accountId}/unfollows`)
            .then((response) => {
                console.log(response)
            })
            .catch((e) => {
                window.alert('Error')
                console.log(e)
            })
    });

    $('.follow-button').on('click', () =>{
        axios.post(`/accounts/${accountId}/follows`)
            .then((response) => {
                console.log(response)
            })
            .catch((e) => {
                window.alert('Error')
                console.log(e)
            })
    });
    // const uploader = document.querySelector('.uploader');
    // uploader.addEventListener('change', (e) => {
    //   const file = uploader.files[0];
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     const image = reader.result;
    //     document.querySelector('.default-avatar.png').setAttribute('src', image);
    //   }
    //   $('.submit-botton').removeClass('hidden')
    // });
});

// document.addEventListener('turbolinks:load', () => {
//     const dataset = $('#article-show').data()
//     const articleId = dataset.articleId
//     axios.get(`/articles/${articleId}/like`)
//         /then((response) => {
//             console.log(response)
//         })
// })

