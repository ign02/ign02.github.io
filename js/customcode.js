$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item")
                        .eq(i)
                        .appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });

    $(".continueread").click(function() {
        var $text = $(this).prev()
        var contentHeight = $text
            .addClass('heightAuto').height();
        $text.removeClass('heightAuto').animate({
            height: contentHeight
        }, 500);
    });

    $('#carousel1').on('slide.bs.carousel', function() {
        //$(".carddef").css({ height: "" })
    })

    $("#submitform").click(function() { window.location.href = "finish.html"; });
});