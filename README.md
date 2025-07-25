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

## Modularização

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

### ESM (ECMA Script Module)
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

## NPM - Node Package Manager

Pacotes são bibliotecas, trechos de códigos, que possuem uma função específica que ajudam a desenvolver uma aplicação sem sair do zero.

Dependências são os arquivos auxiliares que são baixados com os pacotes.

Dev-Dependency é uma dependência que só tem relevância para o ambiente de de desenvolvimento e não para o deploy.

O NPM é o gerenciador de dependências, a partir dele podemos instalar, executar e desinstalar essas bibliotecas.

O site do projeto https://www.npmjs.com contém as informações de todos os pacotes e de como utilizá-los.

Para instalar um  pacote basta digitar no terminal:

```$ npm i nome-do-pacote```

Quando a dependência é instalada ela é relacionada no manifesto do projeto, no arquivo package.json.

Os pacotes são intalados dentro do diretório **node_modules**. Esse diretório não precisa ser carregado no deploy e deve ser declarada no arquivo **.gitignore** que tem por função informar todos objetos que não serão carregados no ambiente de produção.

```
node_modules/
```

### Restore
Depois de clonar um projeto Node.JS é possível restaurar os pacotes das dependências listadas no arquivo coração usando o comando.

```
$ npm i
$ npm install
```
### Dev-Dependency
São pacotes com funções que por vezes só tem sentido no contexto do ambiente de desenvolvimento e não queremos que ela seja relacionada no deploy. Para isso usamos a flag **-D** ao fim da linha de comando de instalação do pacote.

```
$ npm i log-symbols
```

### Desinstalar um pacote
Para remover um pacote nunca delete diretamente as dependências pelo diretório **node_module**, liste co comando **fund** para listar a origem do pacote:

```
$ npm fund
```
Depois use o comando:

```
$ npm uninstall
```
### Atualizar dependências
Para atualizar dependências de um projeto usamos o comando:

```
$ npm update nome-do-pacote
```

## NPM Scripts

NPM Scripts são linhas de comando que funcionam como atalhos para tarefas de execução ou testes no ambiente de desenvolvimento.
É definida com chave e valor detro do arquivo **package.json**.

```
"scripts": {
    "test": "echo \"Hello world\" && exit 1",
    "start": "node ./src/index.js"
  }
```
### Executando NPM scripts

Podemos executar através da linha de comando do termninal:

```
$ npm run test
$ npm run start
```
Outra forma é pousar o mouse sobre a chave do script e clicar sobre a opção de execução **Executar Script**.
O VS-Code abre uma nova instância para execução.

O método mais rápido é ativar o painel **Scripts NPM**, indo nos três pontos ao lado do título do Explorador de arquivos e escolher a respectiva opção.
O painel será mostrado na parte debaixo do explorador, daí é só clicar no botão de execução do script.

### Automatizando a execução de projetos Node.JS

```
"start": "node src/index.js"
"iniciar": "node src/index.js && mkdir dist"
```

### Scripts comuns

```
"prebuild": "npm install",
"start:dev": "node src/index.js",
"start-watch": "node --watch src/index.js"
```

## Manipulando variáveis de ambiente
São variáveis especiais que ficam em um arquivo indepente para guardar dados sensíveis como senhas, tokens, chaves API e números de configuração.

As variáveis de ambiente são guardadas num arquivo **.env**; esse arquivo será declarado junto com o diretório de pacotes **node_modules** no arquivo **.gitignore** para que não sejam publicados no ambiente de produção.

### Editando um arquivo .env
USERDATABASE="naruto"
PASSWORDDATABASE="uzumaki"

Arquivo .env
```
#variáveis de ambiente 

USERDATABASE='seya'
PASSWORDDATABASE='pegasus'
```

Arquivo data.js
```
async function connectToDatabase(user, password) {
    if(
      user === process.env.USERDATABASE 
      && password === process.env.PASSWORDDATABASE
      ) {
        console.log('Conectando ao banco de dados...');
    } else {
        console.log('Falha de login! Não foi possível conectar ao banco de dados!');
    }
}

export default connectToDatabase;
```

Arquivo index.js
```
import connectToDatabase from "./database/data.js";

async function main() {
    connectToDatabase(
        process.env.USERDATABASE,
        process.env.PASSWORDDATABASE
    );
}

await console.log(process.env.USERDATABASE);

main();
```
O script de execução deve referenciar a variável de ambiente:

```
"start:dev": "node --env-file=.env --watch src/index.js"

Em versões anteriores a 20 do Node o arquivo .env não é lido de forma automática, é preciso instalar o pacote **dotenv**.

O método process seguido da declaração de variável de ambiente permite acessar de forma segura e privada os dados de login da aplicação de exemplo.