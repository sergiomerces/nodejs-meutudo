//funções exportáveis por padrão

exports.connectToDatabase = async (dataName) => {
    console.log("Conectando ao banco: " + dataName);
}

exports.disconnectToDatabase = async (dataName) => {
    console.log("Desconectando do banco: " + dataName);
}