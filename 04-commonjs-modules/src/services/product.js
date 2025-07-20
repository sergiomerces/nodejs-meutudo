//todas as funções que lidam com o produto

const productType = {
    version: "digital",
    tax: "x1"
};

async function getFullName(codeId, productName) {
    console.log("product: " + codeId + "--" + productName);
    await doBreakLine();
}

async function doBreakLine() {          //hidden member uma função que não pode ser vista de fora
    console.log("\n");
}

async function getProductLabel(productName) {
    console.log("Product: " + productName);
}

module.exports = {      //todas funções ou objetos executados externamentes devem ser expostadas
    getFullName,
    getProductLabel,
    productType
};