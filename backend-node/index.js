const express = require('express')
const app =express()
const mysql2 = require('mysql2')
const cors = require('cors')

app.use(cors());
app.use(express.json());



const db = mysql2.createConnection({
    user:'root',
    host:'localhost',
    password: '849019912966serverfitzgerald2021mariadb',
    database: 'empleados',
    port: 12000,
});



app.get('/', function(req, res){
    document.write("[SERVIDOR ACTIVO");
  });


app.post("/insertar", (req ,res) => {
    const id_usuario = req.body.id_usuario;
    const nombre_usuario = req.body.nombre_usuario;
    const correo_usuario = req.body.correo_usuario;
    const telefono_usuario = req.body.telefono_usuario;
    const rol_usuario = req.body.rol_usuario;
    const estado_usuario = req.body.estado_usuario;

    db.query(
      'INSERT INTO empleados.usuario (id_usuario, nombre_usuario, correo_usuario, telefono_usuario, rol_usuario, estado_usuario) VALUES (?,?,?,?,?,?)',
    [id_usuario, nombre_usuario, correo_usuario, telefono_usuario, rol_usuario, estado_usuario], 
    (err, result) => {
        if (err){
            console.log(err);
        }else {
            res.send("Values Inserted");
        }
    }
   ); 
});



app.get('/empleados', (req, res) => {
    db.query('SELECT * FROM empleados.usuario', (err, result) => {
        if (err){
           console.log(err);     
        } else {
            res.send(result);
        }
    });
});


app.get('/login', (req, res) => {
    let id = req.user;
    let queryDB = "SELECT * FROM empleados.usuario WHERE id_usuario = "+id;
    console.log("QUERY : "+queryDB);
    db.query(queryDB,(err, result) => {
        if (err){
           console.log(err);     
        } else {
            res.send(result);
        }
    });
});



app.listen(5000, ()=>{
    console.log('Server is running on 5000');
});
