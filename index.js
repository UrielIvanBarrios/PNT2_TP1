//Index TP1
const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];
    
//Parte1
//Ejercicio 1
console.log("\n"+productos[0].nombre+"\n"); // Remera

//Ejercicio 2
for (let index = 0; index < productos.length; index++) {
    console.log(`Producto: ${productos[index].nombre} - Precio: ${productos[index].precio}`)
}
console.log("\n");
//Ejercicio 3
productos.forEach((producto) => {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
});

//Parte 2
//Ejercicio 4
