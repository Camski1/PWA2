(function($){
  /*login*/
  $('#signinButton').click(function(){
    var user = $('#user').val();
    var pass = $('#pass').val();
    console.log("is it working?");
    $.ajax({
        url:'xhr/login.php',
        type: 'post',
        dataType: 'json',
        data: {
          username: user,
          password: pass
        },
        success:function(responce){
          console.log("test user");
          if(responce.error){
            alert(responce.error);
        }else{
          window.location.assign('home.html');
        };
      }
    });
  });


   /*logout*/
$('#logOut').click(function(e){
  e.preventDefault;
  $.get('xhr/logout.php', function(){
    window.location.assign('index.html')
  })
});


 /*register*/


/*tooltips*/
$(".masterTootip").hover(function(){
    var title= $(this).attr("title");
    $(this).data("tipText", title).removeAttr("title");
    $("<p class='tooltip'></p>")
    .text(title)
    .appendTo("body")
    .fadeIn("slow");
}, function() {
    $(this).attr("title", $(this).data("tipText"));
    $(".tooltip").remove();  
}) .mousemove(function(e){
      var mousex = e.pageX +20;
      var mousey = e.pageY +10;
      $(".tooltip")
      .css({ top: mousey, left: mousex})
});



/*home page einstien head move*/
$(".eihome").hide() .show("slow");
/*accordion*/
$(".tabs2").click(function () {
  if ( $( ".hide2" ).is( ":hidden" ) ) {
    $( ".hide2" ).slideDown( "slow" );
  }else{
  	 $( ".hide2" ).hide();
  }
});

$(".tabs3").click(function () {
  if ( $( ".hide3" ).is( ":hidden" ) ) {
    $( ".hide3" ).slideDown( "slow" );
  }else{
  	 $( ".hide3" ).hide();
  }
});

$(".tabs1").click(function () {
  if ( $( ".hide1" ).is( ":hidden" ) ) {
    $( ".hide1" ).slideDown( "slow" );
  }else{
  	 $( ".hide1" ).hide();
  }
});
/*Popup modal*/
$("a .plus").click(function () {
  if ( $( "#popup" ).is( ":hidden" ) ) {
    $( "#popup, .overlay" ).show();
  }else{
  	 $( "#popup" ).hide();
  }
});

$("a .thisOne").click(function () {
  if ( $( "#popup" ).is( ":hidden" ) ) {
    $( "#popup" ).show();
  }else{
  	 $( "#popup" ).hide();
  }
});

})(jQuery);


