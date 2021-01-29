
//debugger;

let lista = ["miguel", "andrea", "diana", "adrian", "diego", "julian"];
let edad = [23,16,37,50,37,27];
let info = [];

for (let i = 0; i < lista.length; i++) {
    info[i] = {name : lista[i], edad : edad[i]};
}
console.log(info);

for(let id in lista){
    console.log(`La posicion de la lista es ${id}`);
}
for(let valor of lista){
    console.log(`y su valor es ${valor}`);  
}