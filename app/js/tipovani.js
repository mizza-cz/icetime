
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
document.getElementById('tipy-btn').addEventListener('click', function(){
 
   errorTipy = document.querySelector(".ui.error.message"),
   successTipy = document.querySelector(".ui.success.message");

   let inputTipy = document.querySelectorAll('tipovani-item__input-text')
   if(inputTipy <= 0){
         errorTipy.className = "ui error message ";
      
      } else{
         successTipy.className = "ui success message";
         
      }
   
});




