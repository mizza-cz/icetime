
// let el = document.getElementById('tipy-btn');
// if(el){
//   el.addEventListener('click', function(){
//     errorTipy = document.querySelector(".ui.error.message"),
//   successTipy = document.querySelector(".ui.success.message");

//   let inputTipy = document.querySelectorAll('tipovani-item__input-text')
//   if(inputTipy == 0){
//         errorTipy.className = "ui error message ";
     
//      } else{
//         successTipy.className = "ui success message";
        
//      }
//   });
// }


// let el = document.getElementById('tipy-btn');
// if(el){
//   el.addEventListener('click', function(){
//     errorTipy = document.querySelector(".ui.error.message"),
//   successTipy = document.querySelector(".ui.success.message");

//   let numbers = [];
//   const inputs = document.getElementsByName('test');
//   for (const input of inputs) {
//     numbers.push(Number(input.value));
//     if(input.value >= 1 ){
      
//       successTipy.className = "ui success message";
   
//    } else{
//     errorTipy.className = "ui error message ";
      
//    }

//   }



//   });
// }
let el = document.getElementById('tipy-btn');
if(el){
  el.addEventListener('click', function(){
    errorTipy = document.querySelector(".ui.error.message"),
  successTipy = document.querySelector(".ui.success.message");

  let numbers = [];
  const inputs = document.getElementsByName('test');
  for (let input of inputs) { 
    numbers.push(Number(input.value));

  }
  const total = numbers.reduce((prevValue, currentElem) =>{
    const table = {prevValue, currentElem,'sum': prevValue + currentElem};
   
    return prevValue + currentElem;
  },0);
  if(total > 0){
    successTipy.className = "ui success message";
  }
  else{
    errorTipy.className = "ui error message ";
    
  }
  console.log(total);
  

  });
}






jQuery(document).ready(function($) {
  $('.tipovani__inner').slick({
    prevArrow: '<button class="tipovani__btn tipovani__btnprev"><img src="images/svg/angle-down.svg" alt="" ></button> ',
    nextArrow: ' <button class="tipovani__btn tipovani__btnnext"><img src="images/svg/angle-down.svg" alt = "" ></button > ',
    // centerMode: true, 
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:false,
    responsive: [
      
   
    {
      breakpoint: 541,
      settings: {
        slidesToShow:1,
        centerMode: true,
        
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
  function limitKeypress(event, value, maxLength) {
    if (value != undefined && value.toString().length >= maxLength) {
        event.preventDefault();
    }
    return
  }
  // Prevent NULL input and replace text.
$(document).on('change', 'input[type="number"]', function (event) {
  this.value = this.value.replace(/[^0-9]+/g, '');
  if (this.value < 1) this.value = 0;
});

// Block non-numeric chars.
$(document).on('keypress', 'input[type="number"]', function (event) {
  return (((event.which > 47) && (event.which < 58)) || (event.which == 13));
});

 var validations = {
  required: function(value){
    return value !== '';
  },
  phone: function(value){
    return value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
);
  },
  email: function(value){
    return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  }
}
let valed = function validate() {
  var form = document.getElementById('form'),
      inputsArr = form.querySelectorAll('input'),
      errorMessage = document.querySelector(".ui.error.message"),
      successMessage = document.querySelector(".ui.success.message");
  
  form.addEventListener('submit', function(e){
    var i = 0;
    while (i < inputsArr.length ) {
      var attr = inputsArr[i].getAttribute('data-validation'),
          rules = attr ? attr.split(' ') : '',
          parent = inputsArr[i].closest(".field"),
          j = 0;
      while (j < rules.length) {
        if(!validations[rules[j]](inputsArr[i].value)) {
          e.preventDefault();
          errorMessage.className = "ui error message";
          errorMessage.innerHTML = "musí být vyplněno!";
          parent.className = "field error";
          return false;
        }
        errorMessage.className = "ui error message hidden";
        parent.className = "field";
        j++;
      }
      i++;
    }
    e.preventDefault();
    successMessage.className = "ui success message";
    // form.outerHTML = "";
    // delete form;
  }, false)
validate();

}
