$(document).ready(function(){
	// SUB MENU AUTOSCROLL NEWS
    var marquee = $('div.marquee');
    marquee.each(function() {
        var mar = $(this),indent = mar.width();
        mar.marquee = function() {
            indent--;
            mar.css('text-indent',indent);
            if (indent < -1 * mar.children('div.marquee-text').width()) {
                indent = mar.width();
            }
        };
        mar.data('interval',setInterval(mar.marquee,1000/60));
    })

	// ON SCROLL LOAD NEWS FUNCTION
	var firstScroll = false;
	var secondScroll = false;
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			if (firstScroll == false) {
				loadNews();
				firstScroll = true;
			} else if (firstScroll == true && secondScroll == false) {
				loadNews2();
				secondScroll = true;
			}
		}

	});

});

function loadNews(){
	$.getJSON("data/1.json",function(json){
		$.each(json, function(index){
			$(".news-container").append("<div class='panel panel-default'><div class='panel-body new-card'><img class='img-rounded panel-img-desktop' src="
			+ json[index].image+"><h2>"
			+ json[index].title+"</h2><img class='img-rounded panel-img-mobile' src="+ json[index].image +"><p>"
			+ json[index].body +"</p><p class='text-info'>"
			+ json[index].data +"</p>");
		});
		$(".side-bar").append("<img src='img/publi3.jpg' class='publi-desktop'>");
	});
}

function loadNews2(){
	$.getJSON("data/2.json",function(json){
		$.each(json, function(index){
			$(".news-container").append("<div class='panel panel-default'><div class='panel-body new-card'><img class='img-rounded panel-img-desktop' src="
			+ json[index].image+"><h2>"
			+ json[index].title+"</h2><img class='img-rounded panel-img-mobile' src="+ json[index].image +"><p>"
			+ json[index].body +"</p><p class='text-info'>"
			+ json[index].data +"</p>");
		});
		$(".side-bar").append("<img src='img/publi4.jpg' class='publi-desktop'>");
	});
}
