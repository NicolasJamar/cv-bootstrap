/*$(function(){
	$(".navbar a, footer a").on("click", function(event){
		
		event.preventDefault();
		var hash = this.hash;

		$('body').animate({scrollTop: $(hash).offset().top} , 900 , function(){
			window.location.hash = hash;
		})
	});
});
*/

$(function(){  
    $(".navbar a, footer a").on("click", function(event) 
    {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900, function()
        {
            window.location.hash = hash;
        }); 
    });

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', 
         function () 
         {
            $('.navbar-toggle:visible').click();
         });
});