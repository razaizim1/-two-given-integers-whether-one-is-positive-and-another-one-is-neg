function myFunction(a, b) {
    if ((a < 0 && b > 0) || a > 0 && b < 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
myFunction(1, 1);
myFunction(-1, 2);
myFunction(3, -1);
myFunction(-1, -1);


// way two
function myFunction(c, d)
{
  if ((c < 0 && d > 0) || c > 0 && d < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(myFunction(1, 1));
console.log(myFunction(-1, 1));
console.log(myFunction(3 -1));
console.log(myFunction(-1, -1));