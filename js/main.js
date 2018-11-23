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
    
    
    $(".caption-container").css("bottom", -75);

    
    //bind mouseover event handler to .image-container
    $(".image-container").mouseover(function() {

        console.log($(this));
        
        $(this).children(".caption-container").animate({
            bottom: 0
        }, 1000);
    });

    // $(".image-container").each(function() {
    //     console.log('12313');
    //     $(this).hover(function() {
            
            
    //         $(this).children(".caption-container").animate({
    //             bottom: 0
    //         }, 1000);
    //     }, function() {
    //         $(this).children(".caption-container").animate({
    //             bottom: -75
    //         }, 1000);
    //     });
    // });





















});

