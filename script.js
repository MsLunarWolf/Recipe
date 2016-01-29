$(document).ready(function(){
  $(".list").click(function(){
    $(this).toggleClass("complete");
  });
  $('.fade').click(function(){
  	$(this).fadeTo("slow", 0);
  });
  
});