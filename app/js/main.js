$(function(){
    $('body').on('click', '.video-preview-wrapper', function(e){
        let video = $('#about-tour-video');
        let videoSrc = video.attr('src');
        $(this).css('display', 'none')
        video.attr('src', videoSrc + '?autoplay=1')
    })
});