// Only change code below this line
const milili = [10, 25, 4];
let mili=[];
function myArr(mili){
        "use strict";
        for (let i=0; i<milili.length; i++){
     mili.push(milili[i]);
    } return mili;
}
  console.log(myArr([2], [4], [6]));
// Using mili = [4, 10, 25] would be invalid
// Only change code above this line
module.exports = myArr;