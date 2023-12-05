import mysql from 'mysql2';
//Importa o modulo mysql

/* const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}); */

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'lojadb'
});
//Configura a conexão mysql

connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: lojadb } `);
});
// Cria uma condicional a caso de erro
export default connection;
//exporta a conexão