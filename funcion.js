function multi(a,b){
    resultado=a*b;
    console.log(resultado);
  }
  
  multi(2,3);
  
  var x = function(x,y){
    return x*y;
  }
  console.log(x(2,3));
  
  var y = (x,y) => x*y;
  console.log(y(2,3));
  