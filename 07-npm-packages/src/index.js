import chalk from "chalk";
import logSymbols from "log-symbols";
import symbols from "log-symbols";

console.log(logSymbols.success, chalk.green.italic('Servidor iniciado com sucesso'));
console.log(logSymbols.error, chalk.red.bold('Erro no login de conexão'));