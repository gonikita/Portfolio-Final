$( ".switch" ).on("click", function() {
  if( $( "body" ).hasClass( "dark" )) {
    $( "body" ).removeClass( "dark" );
    $( ".switch" ).text( "OFF" );
  } else {
    $( "body" ).addClass( "dark" );
    $( ".switch" ).text( "ON" );
  }
});