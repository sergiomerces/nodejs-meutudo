# Node.JS 
Bootcamp MeuTudo Node.JS para desenvolvimento mobile da DIO

![Node.JS](./node-js.png)

O NODEJS é um ambiente de execução do JavaScript que pode rodar no servidor criado por Ryan Dahl em 2009.

## Trabalhando com projetos NODEJS

### 1. Criar um workspace
Um workspace é uma pasta padrão para alocar os arquivos do projeto, ela deve ser criada sem espaços

### 2. Inicializar um projeto
O primeiro passo é criar um parquivo package.json ele é um arquivo de configuração com informações sobre o projeto e suas dependências.

```$ npm init ```

```
{
  "name": "my1stproject",
  "version": "1.0.0",
  "description": "my first project Node.JS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "open": "echo \"Olá mundo!\" && exit 1"
  },
  "author": "Sergio Merces",
  "license": "ISC"
}
```

Para criar o arquivo coração de forma rápida basta usar o atributo -y que todos os valores padrões são setados automaticamente.

```$ npm init -y```

### 3. Executar um script de teste

```$ npm run test```

### 4. Estrutura de arquivos do projeto
Todos os arquivos .js são reunidos na pasta src (source) e os arquivos de configuração ficam de fora.

O arquivo principal ou ponto de entrada do projeto normalmente é o index.js

### 5. Executar um arquivo 

```$ node src/index.js```

```$ node src/app/index.js```

### 6. Monitor de execução automática
Se quisermos que a execução seja atualizada automaticamente sempre que houver uma alteração no arqivo sem que tenhamos que digitar o comando de execução a cada alteração, basta usar:

```$ node --watch src/index.js```

Para parar basta usar ctrl + C

### 7. Escrevendo código NodeJS

A maioria dos comandos de lógica de programação são os mesmos Javascript.

#### Comando de saída

```console.log("texto");```

#### Template String

```console.log(`Meu nome é ${userName}`); ```

### 8. Modularização

* o código vai se tornando mais complexo
* mais difícil de dar manutenção
* mais difícil de fazer mudanças

#### Common JS
O Common JS utiliza uma sintaxe mais simples com as palavras-chave **require** para carregar módulos e **module.exports** para exportar funcionalidades.

Características:
* síncrono por padrão
* uso no servidor NodeJS
* require / module.exports
* carregamento dinâmico

Arquivo main.js

```
const product = require("./services/product");

async function main() {
    console.log('carrinho compras: ');
    product.getFullName("408", "mousepad");
    product.getFullName("508", "mouse");
    product.getProductLabel("mouse");
}

main();
```

Arquivo product.js

```
async function getFullName(codeId, productName) {
    console.log("product: " + codeId + "--" + productName);
    await doBreakLine();
}

module.exports = getFullName;

```

#### ESM (ECMA Script Module)
Os módulos ESM introduzem uma sintaxe unificada com a s palavras-chave **import** e **export** alinhada com padrões de outras linguagens modernas.

Características:
* assíncrono por padrão
* suporte nativo nos navegadores
* import / export
* carregamento estático

Quando criamos o arquivo de configuração **package.json** o padrão é a modularização **common js**, para alterar para o padrão **esm** temos que adicionar a declaração logo abaixo de main:

type: "module",

arquivo main.js

```
import connectToDatabase from "./utils/database.js";

connectToDatabase('SCMTech');

```

arquivo database.js

```
async function connectToDatabase(dataName) {
    console.log(`Conectado ao banco de dados ${dataName}`);
}

export default connectToDatabase;

```