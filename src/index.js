
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) && matrix.length) { 

    matrix.map(function(item, i) { 
         if (i & 1) {
           item.reverse();
         }
    }); 
    return matrix.flat();
 
   } else {
     
    return [];
    
   }

}
