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
 (function () {
            var options = {
                whatsapp: "+918794928179", // WhatsApp number
                call_to_action: "WhatsApp Inquiry", // Call to action
                position: "left", // Position may be 'right' or 'left'
            };
            var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
            s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        })();

});
document.getElementById("year").innerHTML = new Date().getFullYear();
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6031f7bc9c4f165d47c57044/1ev1ivf5p';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

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
/*******Form Validiation Service In All******/
function validateForm(){
    var valid = false;
    //web
    if(document.getElementById("smap").checked){
        valid = true;
    }
    if(document.getElementById("wframe").checked){
        valid = true;
    }
    if(document.getElementById("wdev").checked){
        valid = true;
    }
    if(document.getElementById("relm").checked){
        valid = true;
    }
    if(document.getElementById("upgr").checked){
        valid = true;
    }
    if(document.getElementById("seow").checked){
        valid = true;
    }
    //Mobile
	/*
    if(document.getElementById("msmap").checked){
        valid = true;
    }
    if(document.getElementById("mwframe").checked){
        valid = true;
    }
    if(document.getElementById("mwdev").checked){
        valid = true;
    }
    if(document.getElementById("mrelm").checked){
        valid = true;
    }
    if(document.getElementById("mmupgr").checked){
        valid = true;
    }
    if(document.getElementById("mmeow").checked){
        valid = true;
    }
    //Desktop
    if(document.getElementById("wsmap").checked){
        valid = true;
    }
    if(document.getElementById("wwframe").checked){
        valid = true;
    }
    if(document.getElementById("wwdev").checked){
        valid = true;
    }
    if(document.getElementById("wrelm").checked){
        valid = true;
    }
    if(document.getElementById("wupgr").checked){
        valid = true;
    }
    if(document.getElementById("wseow").checked){
        valid = true;
    }
    //Promote
    if(document.getElementById("logod").checked){
        valid = true;
    }
    if(document.getElementById("mseop").checked){
        valid = true;
    }
    if(document.getElementById("sme").checked){
        valid = true;
    }
    if(document.getElementById("leadg").checked){
        valid = true;
    }
    if(document.getElementById("conm").checked){
        valid = true;
    }
    if(document.getElementById("vida").checked){
        valid = true;
    }
    if(document.getElementById("bph").checked){
        valid = true;
    }
    if(document.getElementById("offc").checked){
        valid = true;
    }
    if(document.getElementById("prev").checked){
        valid = true;
    }
    if(document.getElementById("leafp").checked){
        valid = true;
    }
    if(document.getElementById("bnrp").checked){
        valid = true;
    }
    if(document.getElementById("spone").checked){
        valid = true;
    }
    */
    if(valid){
        alert("Thanks For Submitting!!!");
    }
    else{
        alert("Please Select atleast one option");
        return false;
    }
}
