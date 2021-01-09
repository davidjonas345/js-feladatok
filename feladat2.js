/*Kérj be két (a és b) számot, majd számold ki:
    összegüket
szorzatát
aa , ab
kör kerületét (a-ból), kör területét b-ből
Pí értéke pontosan : Math.pi
Pitagorasz tétele alapján C-t (a2 + b2 = c2)
Gyökvonás segítség: Math.sqrt(9); // 3 */



var num1 = Number(window.prompt("Adj meg egy számot!")); //szöveg
var num2 = Number(window.prompt("Adj meg ismét egy számot!")); //szöveg



document.getElementById("összeadás").innerHTML = num1 + num2;
document.getElementById("szorzás").innerHTML = num1 * num2;
document.getElementById("exponenciális").innerHTML = num1 ** num1;
document.getElementById("exponenciális2").innerHTML = num1 ** num2;
document.getElementById("kerület").innerHTML = 2 * num1 * Math.PI;
document.getElementById("terület").innerHTML = num2 ** num2 * Math.PI;
document.getElementById("pitagoras").innerHTML = Math.sqrt(num1**2 + num2**2);












