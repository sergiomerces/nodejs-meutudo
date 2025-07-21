//import connectToDatabase from "./utils/database.js";
//na importação eu preciso especificar a extensão do arquivo

//importar múltiplas funções
import * as database from "./utils/database.js"
import { getDataFromApi } from "./utils/api.js";

//destructuring
//import { disconnectToDatabase } from "./utils/database.js";
//disconnectToDatabase();

database.connectToDatabase('SCMTech');
database.disconnectToDatabase();

getDataFromApi();