$(document).ready(function(){

  $("nav >ul>li").hover(function(){     /*下拉選單*/
    if($(this).hasClass("slideD")){
      $(this).removeClass("slideD");
      $(this).children("ul").slideUp();
  }else{
      $("nav ul ul").slideUp();
      $("nav li").removeClass("slideD");
      $(this).addClass("slideD");
      $(this).children("ul").slideDown();
    }
  });

  $(".habrgr > span").click(function(){   /*漢堡選單*/
    if( $(this).hasClass("click") ){
      $(this).removeClass("click");
      $("nav  ul").slideUp();
    }else{
      $(this).addClass("click");
      $("nav  ul").slideDown();
      return false;
    }
  });

  $("content a").hover(function(){
    $(this).append("<div></div>");
    $(this).children("div").addClass("mask");
  });
  $("content a").mouseleave(function(){
    $(this).children("div").remove();
  });


});
