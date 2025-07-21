async function connectToDatabase(dataName) {
    console.log(`Conectado ao banco de dados ${dataName}`);
}

async function disconnectToDatabase(dataName) {
    console.log(`Desconectado do banco de dados ${dataName}`);
}

//export default connectToDatabase;

//exportar múltiplas funções
export { connectToDatabase, disconnectToDatabase };