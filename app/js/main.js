
function limitKeypress(event, value, maxLength) {
  if (value != undefined && value.toString().length >= maxLength) {
      event.preventDefault();
  }
  return
}
 

function myFunction() {
   var x = document.getElementById("myInput");
   if (x.type === "password") {
     x.type = "text";
   } else {
     x.type = "password";
   }
 }
 $(document).ready(function(){
  function updateText(event){
    var input=$(this);
    setTimeout(function(){
      var val=input.val();
      if(val!="")
        input.parent().addClass("label-active");
      else
        input.parent().removeClass("label-active");
    },1)
  }
  $(".tipovani-item__input input").keydown(updateText);
  $(".tipovani-item__input input").change(updateText);
});

 

jQuery(document).ready(function($) {
  $('.tipovani__inner').slick({
    prevArrow: '<div class="slick-current"><button class="tipovani__btn tipovani__btnprev"><img src="images/svg/angle-down.svg" alt="" ></button></div> ',
    nextArrow: ' <button class="tipovani__btn tipovani__btnnext"><img src="images/svg/angle-down.svg" alt = "" ></button > ',
    // centerMode: true,
    slidesToShow: 5,
    infinite:false,
    responsive: [
      
     {
       breakpoint: 1441,
       settings: {
         slidesToShow:4,
       }
     },
     {
      breakpoint: 1241,
      settings: {
        slidesToShow:3,
      }
    },
    {
      breakpoint: 921,
      settings: {
        slidesToShow:2,
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow:1,
        
      }
    },
   
    ]
  });

  $(".tipovani-item__input-text").focus(function(){
    $(this).parent().removeClass("round");
    $(this).parent().addClass("focus");
 
   })
   .blur(function(){
        $(this).parent().removeClass("focus");
    $(this).parent().addClass("round");
   })

   $(".socialInput").on('click', function() {
    $(this).parent().toggleClass("checked");
  });
  
  
  $('.remember .radio__input').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.remember').find('.social__info').removeClass('tab-active').hide();
    $('.remember .radio__box').find('.radio__input').removeClass('active');
    $(this).addClass('active');
    $('#' + id)
      .addClass('tab-active')
      .fadeIn();
    return false;
  });

 
 });    





 

 