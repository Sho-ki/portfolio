$(window).on('load', function() {
    $('.loading .inner').fadeOut(500, function(){
        $(".loading").fadeOut(750);
    });
    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: "linear",
            queue: false
        }
    });
})

$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });

    var typed = new Typed(".typed", {
        strings: ["Front End Developer", "23 years old", "Student."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1500,
        showCursor: false
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            480:{
                items:2,
                nav:true,
            },
            768: {
                item:3,
                nav:true,
            },
            938:{
                items:4,
                nav:true,
            }
        },
        autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    })

    var skillsTopOffset = $(".skillSection").offset().top;
    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                linewidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: "linear",
                queue: false
            }
        });
        return false;

    });

    $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

    const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}


	}
    

    
});
