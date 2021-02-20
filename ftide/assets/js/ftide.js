jQuery(document).ready(function(){

	
	const humbargerBtn = jQuery('.humbergarBtn');
	
	humbargerBtn.click(function(){

		jQuery('.sitenav').toggleClass('addSlide');

		jQuery(this).toggleClass('close');


	});

$(document).on("scroll",function(){
        if($(document).scrollTop()>150){
            $("header").addClass('sticky');      
            $("header").removeClass('site-header');      
        } else{
            $("header").removeClass('sticky');
            $("header").addClass('site-header');
            
        }
    });

    	$('.row-videoWrap.owl-carousel').owlCarousel({
       loop:true,
        autoplay:true,
         smartSpeed:2000,
        autoplayTimeout:5000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });

             $('.row-reviews.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });

     
      $('body').on('keyup', '.js-input-mobile', function () {
            var $input = $(this),
            value = $input.val(),
            length = value.length,
            inputCharacter = parseInt(value.slice(-1));

         if (!((length > 0 && inputCharacter >= 0 && inputCharacter <= 10) || (length === 1 && inputCharacter >= 7 && inputCharacter <= 10))) {
            $input.val(value.substring(0, length - 1));
         }
      });

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
     }, 1500);


});
document.getElementById("year").innerHTML = new Date().getFullYear();

/**Check boxes-Editted By Anirban**/
document.getElementById('all-s').onclick = function() {
  var checkboxes = document.getElementsByName('webs');
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}   
/**Mob**/
document.getElementById('all-mob').onclick = function() {
  var checkboxes = document.getElementsByName('mobs');
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}   
/**Win**/
document.getElementById('all-win').onclick = function() {
  var checkboxes = document.getElementsByName('wins');
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}   
/**Promote**/
document.getElementById('all-prom').onclick = function() {
  var checkboxes = document.getElementsByName('proms');
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
}   
