# nodejs-meutudo
Bootcamp MeuTudo Node.JS para desenvolvimento mobile da DIO

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