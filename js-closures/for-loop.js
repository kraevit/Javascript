for (var i=0; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i ); // 6 6 6 6 6
  }, i*1000 );
}

for (var i=0; i<=5; i++) {
  (function() {
    setTimeout( function timer(){
      console.log( i ); // 6 6 6 6 6
    }, i*1000 );
  })();
}

for (var i=0; i<=5; i++) {
  (function () {
    var j = i;
    setTimeout( function timer(){
      console.log( j ); // 1 2 3 4 5
    }, j*1000);
  })();
}

for (var i=0; i<=5; i++) {
  (function ( j ){
    setTimeout( function timer(){
      console.log( j ); // 1 2 3 4 5
    });
  })( i );
}

// let

for (var i=0; i<=5; i++) {
  let j = i;
  setTimeout( function timer(){
    console.log( j ); // 1 2 3 4 5
  }, j*1000);
}

for (let i=0; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i );  // 1 2 3 4 5
  }, i*1000);
}
