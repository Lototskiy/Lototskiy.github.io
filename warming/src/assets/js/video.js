$(".video").fancybox({
    type: "iframe",
});

let videos = document.querySelectorAll('.video');
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener('mouseover', function () {
        let iframeSrc = this.querySelector('iframe').getAttribute('data-src');
        this.querySelector('iframe').src = iframeSrc;
    });

    videos[i].addEventListener('mouseleave', function () {
        this.querySelector('iframe').src = "";
    });
}