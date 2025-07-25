import connectToDatabase from "./database/data.js";

async function main() {
    connectToDatabase(
        process.env.USERDATABASE,
        process.env.PASSWORDDATABASE
    );
}

await console.log(process.env.USERDATABASE);

main();