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
    if( $("nav").hasClass("click") ){
      $("nav").removeClass("click");
      $("nav  ul").slideUp();
    }else{
      $("nav").addClass("click");
      $("nav  ul").slideDown();
      return false;
    }
  });
  $("body").click(function(){              /*1107修改mouseleave*/
    if( $("nav").hasClass("click") ){
      $("nav ul").slideUp(700);
      $("nav").removeClass("click");
    }
  });


  $("content a").hover(function(){        /*透明片*/
    $(this).append("<div></div>");
    $(this).children("div").addClass("mask");
    var img_height = $(this).children("img").height();
    $(".mask").height( img_height );
  });
  $("content a").mouseleave(function(){
    $(this).children("div").remove();
  });



  $(".show_img img").hover(function(){  /*大型 幻燈片*/
    var img_src = $(this).attr("src");
    $(".show_box").attr("src",img_src);

  });

  $(".buttomR").click(function(){   /*  S 幻燈片 */
    var $old =$(".point");
    if( $(".point").hasClass("last") ){
      $(".first").addClass("point");
    }else{
      $(".point").next().addClass("point");
    }
    $old.removeClass("point");
    var point_src = $(".point").attr("src");
    $(".show_box").attr("src",point_src);
  });
  $(".buttomL").click(function(){   /*  S 幻燈片 */
    var $old =$(".point");
    if( $(".point").hasClass("first") ){
      $(".last").addClass("point");
    }else{
      $(".point").prev().addClass("point");
    }
    $old.removeClass("point");
    var point_src = $(".point").attr("src");
    $(".show_box").attr("src",point_src);

  });

});
