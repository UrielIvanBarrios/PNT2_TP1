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
console.log("\n");
//Parte 2
//Ejercicio 4
const nombresProductos = productos.map((producto) => producto.nombre);
console.log(nombresProductos);
console.log("\n");
//Ejercicio 5
const productosTipoRopa = productos.filter((producto) => producto.categoria === "Ropa");
console.log(productosTipoRopa);
console.log("\n");
//Ejercicio 6
const objetoGorra = productos.find((producto) => producto.nombre === "Gorra");
console.log(objetoGorra);
