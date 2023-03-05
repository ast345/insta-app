// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


import $ from 'jquery'
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

window.addEventListener('turbolinks:load', () => {
    $('.avatar-change').on('change', function (e) {
        console.log(e.target.files);
        if (e.target.files[0].size > 0) {
            $(this).parents('form').submit();
        }
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

