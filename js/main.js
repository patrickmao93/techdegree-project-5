$(document).ready(function() {
    const photos = [];
    const photosThumb = [];
    
    class Photo {
        constructor(url, title, caption) {
            this.url = url;
            this.title = title;
            this.caption = caption;
        }
    }
    
    //pushing photo dirs into array
    for (let i = 1; i < 13; i++) {
        const number = ("0" + i).slice(-2);
        photos.push(new Photo(`photos/${number}.jpg`, ));
        photosThumb.push(`photos/thumbnails/${number}.jpg`);
    }

    //hide captions when page load
    $(".caption-container").css("bottom", -75);

    
    //bind hover events handlers to .image-container
    $(".image-container").hover(function() {
        //raise caption up
        $(this).children(".caption-container").animate({
            bottom: 0
        }, 300);
        //zoom image
        $(this).children("img").addClass("zoom");
    }, function() {
        //hide captions
        $(this).children(".caption-container").animate({
            bottom: -75
        }, 300);
        //remove zoom class
        $(this).children("img").removeClass("zoom");
    });





















});

