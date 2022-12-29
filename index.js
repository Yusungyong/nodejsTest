const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'my_database'
});

connection.connect();

connection.query('SELECT * FROM my_table', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.end();
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'react-project/build')))

app.get('/', (req, res) => {
res.sendFile(__dirname, 'react-project/build/index.html')
})