function simple_interest()
{
var p,t,r,si;
p = document.getElementById ("first").value;
t = document.getElementById ("second").value;
r = document.getElementById ("third").value;
si = parseInt((p*t*r)/100 );
document.getElementById ('num').innerHTML ="Simple interest : "+si;
}
