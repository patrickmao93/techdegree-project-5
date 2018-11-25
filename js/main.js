$(document).ready(function() {
    const photos = [];
    const titles = ["Hay Bales", "Lake", "Canyon", "Iceberg", "Desert", "Fall", "Planatation", "Dunes", "Countryside Lane", "Sunset", "Cave", "Bluebells"];
    const captions = ["I love hay bales. Took this snap on a drive through the countryside past some straw fields.", 
                    "The lake was so calm today. We had a great view of the snow on the mountains from here.", 
                    "I hiked to the top of the mountain and got this picture of the canyon and trees below.", 
                    "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.", 
                    "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.", 
                    "Fall is coming, I love when the leaves on the trees start to change color.", 
                    "I drove past this plantation yesterday, everything is so green!", 
                    "My summer vacation to the Oregon Coast. I love the sandy dunes!", 
                    "We enjoyed a quiet stroll down this countryside lane. ", 
                    "Sunset at the coast! The sky turned a lovely shade of orange.", 
                    "I did a tour of a cave today and the view of the landscape below was breathtaking.", 
                    "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."];
    
    //pushing photo dirs into array
    for (let i = 1; i < 13; i++) {
        //format num string into two digits
        const number = ("0" + i).slice(-2);
        //pushing photo objects into photos array
        photos.push({
            'urlThumb': `photos/thumbnails/${number}.jpg`, 
            'url': `photos/${number}.jpg`,
            'title': titles[i - 1],
            'caption': captions[i - 1]
        });
    }

    // $('#search').prevent

    //display all photos on page load
    displayAllPhotos();

    //on search field input, cycle through image objects to find the image title/caption that contains the input string
    // $('#search').on('keyup paste', function() {
    //     //reset content area before displaying matching ones
    //     resetContent();
    //     //if nothing or only whitespace is in search bar
    //     if ($.trim($(this).val()) === '') {
    //         displayAllPhotos();
    //     }
    //     // otherwise, find and display the photos that have titles or captions that contain search entry
    //     for (let i = 0; i < photos.length; i++) {
    //         let titleContains = photos[i].title.includes($(this).val());
    //         let captionContains = photos[i].caption.includes($(this).val());
    //         if (titleContains || captionContains) {
    //             displayPhotoByIndex(i, photos);
    //         }
    //     }
    // });

    $('#search').on('keyup paste', function() {
        //if nothing or only whitespace is in search bar, show all photos
        if ($.trim($(this).val()) === '') {
            $("image-container").show();
        }
        // otherwise, find and display the photos that have titles or captions that contain search entry
        for (let i = 0; i < photos.length; i++) {
            let titleContains = photos[i].title.includes($(this).val());
            let captionContains = photos[i].caption.includes($(this).val());
            if (titleContains || captionContains) {
                $(".image-container").eq(i).show();
            } else {
                $(".image-container").eq(i).hide();
            }
        }
    });    

    function displayAllPhotos() {
        $("#content").html(""); //reset content before writing new content
        for (let i = 0; i < photos.length; i++) {
            displayPhotoByIndex(i, photos);
        }
    }

    function displayPhotoByIndex(i, photos) {
        $("#content").append(`
            <div class="image-container">
                <img src="${photos[i].urlThumb}" alt="${photos[i].title} image">
                <div class="caption-container">
                    <h4>${photos[i].title}</h4>
                    <p>${photos[i].caption}</p>
                </div>
            </div>
        `);
    }
    
    //bind hover events handlers to .image-container
    $(".image-container").hover(function() {
        //raise caption up
        $(this).children(".caption-container").stop().animate({
            bottom: 0
        }, 300);
        //zoom image
        $(this).children("img").addClass("zoom");
    }, function() {
        //hide captions
        $(this).children(".caption-container").stop().animate({
            bottom: -75
        }, 300);
        //remove zoom class
        $(this).children("img").removeClass("zoom");
    });





















}); //document ready end

