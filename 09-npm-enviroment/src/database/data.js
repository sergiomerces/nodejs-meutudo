async function connectToDatabase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log('Conectando ao banco de dados...');
    } else {
        console.log('Falha de login! Não foi possível conectar ao banco de dados!');
    }
}

export default connectToDatabase;