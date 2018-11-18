for (var i=0; i<=5; i++) {
  setTimeout( function timer() {
    console.log( i ); // 6 6 6 6 6
  }, i*1000 );
}
