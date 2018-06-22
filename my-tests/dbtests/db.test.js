
const mysql = require('mysql')

describe('MySql DB Tests ', () => {

    it('should be able to get user data from table', async () => {


        const connection = mysql.createConnection({
            host: 'db4free.net',
            port: 3306,
            user: 'dbtester',
            password: 'dbtester',
            database: 'gk_test_db'
        });

        connection.connect()

        connection.query('SELECT FirstName FROM `users` WHERE City = \'London\'', function (err, rows, fields) {
            if (err) throw err
            console.log('The solution is: ', rows[0].FirstName)

        })

        connection.end()

    });


});
