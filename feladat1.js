/* Adatbekérés:
let name = window.prompt(“Hogy hívnak?”);
kérd be a felhasználó keresztnevét és kedvenc számát két külön változóba, majd Név: Pisti, kedvenc száma: 33
formában írasd ki:
konzolra console.log()
alert ablakban alert()
html oldalra document.write()
egy h1 elembe aminek ay id-ja “feladat1”
 Forma: <h1>Név: Pisti, kedvenc száma: 33</h1> */

console.log("feladat1");


var name2 = window.prompt("Hogy hívnak?");
var fnum2 = window.prompt("Kedvenc számod?");
var result = "Név: " + name2 + ", " + "kedvenc szám: " + fnum2;
console.log(result);
alert(result);
document.getElementById("feladat1").innerHTML=result;






