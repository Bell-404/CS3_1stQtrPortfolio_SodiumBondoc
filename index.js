process.stdin.on('data', input => {

  const NUM= Number(input.toString().trim());  
   // use NUM variable in your code and start it on the next line
   function checkWierdness(NUM) {
       if ((NUM%2==0)&&(NUM>=2)) {
           console.log("Not Weird");
       }
       if ((NUM%2==0)&&(NUM<=5)) {
           console.log("Not Weird");
       }
       if else ((NUM%2==0)&&(NUM>=6)) {
           console.log("Weird");
       }
       if else ((NUM%2==0)&&(NUM<=20)) {
           console.log("Weird");
       }
       if else ((NUM%2==0)&&(NUM>=20)) {
           console.log("Not Weird");
       }
       else {
           console.log("Weird");
       }
   }
checkWeirdness(NUM);






  // end of your code

  process.exit(); // ends the code

});