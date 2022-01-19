const rows = 4;
const  cols = 4;
let my2darray = new Array(rows); // create an empty array of length n
for (var i = 0; i < rows; i++) {
  my2darray[i] = new Array(cols); // make each element an array
}
console.log(my2darray); 

for(var row = 0; row < rows; row++)
{
  for(var col = 0; col < cols; col++){
    my2darray[row][col] = row*col;
  }
}
console.log(my2darray);

console.log(my2darray[2][1]);
