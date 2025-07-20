const product = require("./services/product");    //importar as funções e objetos externos
const config = require("./services/config");
const database = require("./services/dabase");

//destructuring
//const { productName, productType } = require("./services/product");

async function main() {
    console.log('carrinho compras: ');
    product.getFullName("408", "mousepad");
    product.getFullName("508", "mouse");
    product.getProductLabel("mouse");
}

console.log(config.version);
console.log(config.client.device);

//getFullName("1", "teclado");
//console.log(productType);

database.connectToDatabase();

main();