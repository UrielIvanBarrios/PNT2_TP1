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
console.log(`Los productos de la categoria ropa son: ${productosTipoRopa}`);
console.log("\n");
//Ejercicio 6
const arrayProductosMayor3000 = productos.filter((producto) => producto.precio > 3000);
console.log(`Los productos con precios mayores a $3000 son: ${arrayProductosMayor3000}`);
console.log("\n");
//Ejercicio 7
const objetoGorra = productos.find((producto) => producto.nombre === "Gorra");
console.log(objetoGorra);
console.log("\n");

//Parte 3
//Ejercicio 8
const precioMayor = productos.some((producto) => producto.precio > 10000);
console.log(`Hay algun producto mayor a $10000: ${precioMayor}`); 
console.log("\n");
//Ejercicio 9
const productosCuestanMas1000 = productos.every((producto) => producto.precio > 1000);
console.log(`Los productos mas de $1000: ${productosCuestanMas1000}`);
console.log("\n");
//Ejercicio 10
const comprobarProducto = nombresProductos.includes("Campera");
console.log(`El producto Campera existe: ${comprobarProducto}`);
console.log("\n");