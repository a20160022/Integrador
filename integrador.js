alert("Bienvenidos al restaurante La Rosa Naútica, esta es su cuenta. ");
var presupuesto=parseInt(prompt("¿Cuánto es su presupuesto de consumo?"))
var entrada=parseInt(prompt("¿Cuándo cuesta la entrada?"));
var segundo=parseInt(prompt("¿Cuánto cuesta el segundo?"));
var postre=parseInt(prompt("¿Cuánto cuesta el postre?"));

var total=entrada+segundo+postre;
var IGV=(total*18/100)+total;
var vuelto=presupuesto-IGV;

console.log("La entrada cuesta: ",entrada);
console.log("El segundo cuesta: ",segundo);
console.log("El postre cuesta: ",postre);
console.log("El costo total es: ",total);
console.log("El costo con IGV es: ",IGV);
console.log("Su vuelto es de: ",vuelto);
console.log("La rosa naútica agradece visita, vuelva pronto");