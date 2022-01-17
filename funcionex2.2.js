var year = prompt("Ingresa tu año de nacimiento ");
var now = 2022;

function birth(num1,num2)
{
    var res = num2-num1;
    alert("Tu edad es " + res)
}

birth(year,now);
