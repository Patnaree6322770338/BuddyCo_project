const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user: 'root',
    password: "",
    database: "bac"
});
module.exports = { db };

app.get('/users', (req, res)=>{
    db.query("SELECT * FROM roles",(err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.post('/create',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const date_of_birth = req.body.date_of_birth;

    db.query("INSERT INTO users (username,password,email,date_of_birth) VALUES(?,?,?,?)", [username, password, email, date_of_birth],
    (err, result)=>{
        if(err){
            console.log(err);
        } else {
            res.send("Value inserted");
        }
    }
    );
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Server error');
        } else {
            if (result.length > 0) {

                if (password === result[0].password) {
                    res.send("Login successful");
                } else {
                    res.status(401).send('Invalid credentials');
                }
            } else {
                res.status(404).send('User not found');
            }
        }
    });
});

app.listen('3000',()=>{
    console.log('Server on 3000');
})