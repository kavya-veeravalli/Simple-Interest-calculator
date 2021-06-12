function simple_interest()
{
var p,t,r,si;
p = document.getElementById ("first").value;
r = document.getElementById ("second").value;
t = document.getElementById ("third").value;
si = parseInt((p*t*r)/100 );
document.getElementById ('num').innerHTML ="Simple interest : "+si;
}
