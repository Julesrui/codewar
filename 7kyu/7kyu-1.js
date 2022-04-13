//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c){
    if ((a+b > c) && (a+c > b) && (b+c > a)){          //When this line happens, it means a,b,c are all larger than 0
      return true;
    }else{
      return false;
      }
    }