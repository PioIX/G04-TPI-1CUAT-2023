
/*  Paquetes instalados: -g nodemon, express, express-handlebars, body-parser, mysql2
    Agregado al archivo "package.json" la línea --> "start": "nodemon index"
    Proyecto "Node_base"
    Desarrollo de Aplicaciones Informáticas - 5to Informática
    Docentes: Nicolás Facón, Martín Rivas
    Revisión 1 - Año 2021
*/
//Cargo librerías instaladas y necesarias
const express = require('express'); //Para el manejo del servidor Web
const exphbs  = require('express-handlebars'); //Para el manejo de los HTML
const bodyParser = require('body-parser'); //Para el manejo de los strings JSON
const MySQL = require('./modulos/mysql'); //Añado el archivo mysql.js presente en la carpeta módulos
const app = express(); //Inicializo express para el manejo de las peticiones

app.use(express.static('public')); //Expongo al lado cliente la carpeta "public"

//Seteo para capturar datos del formulario
app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());
app.set('view engine', 'handlebars'); //Inicializo Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'})); //Inicializo Handlebars. Utilizo como base el layout "Main".

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

app.listen(Listen_Port, function() {
    console.log('Servidor NodeJS corriendo en http://localhost:' + Listen_Port + '/');
});

let alert = require('alert'); 


/*
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
*/
/*-----------------*/
/*Modifico*/
/*-----------------*/

 function selectOpt(index){
    alert("CORRECTO");

}

class User {
    /**
       *
       * @param {Number} DNI
       * @param {String} nombre 
       * @param {String} usuario
       * @param {String} rol
       * @param {String} contraseña
    */
   
    constructor(DNI, nombre, usuario, contraseña) {
        this.DNI = DNI;
        this.nombre = nombre;
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
    }
    var user = []


app.get('/registro', function(req, res)
{
    //Petición GET con URL = "/", lease, página principal.
    console.log(req.query); //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('registro2', null); //Renderizo página "login" sin pasar ningún objeto a Handlebars
});

//------------
app.post('/regi', async (req, res) =>{
     
    const dni = req.body.dni;
    const nom = req.body.nombre;
    const usua = req.body.usuario;
    const ps = req.body.pass;
    
    const dev = await MySQL.realizarInsert(`INSERT INTO Usuarios (dni, nombre, usuario, contraseña) VALUES ( ${dni}, "${nom}", "${usua}", "${ps}")`) 
    
    if (dev == "1") {

        res.render('registrado2', { mensaje:"Se ha registrado Exitosamente!!!"} );
        //alert( " Bienvenido " + req.body.nombre + ", usted está registrado como usuario "  );
    }
    else{
        console.log(dev);
        alert("No se pudo  registrar como usuario");
    }
    //user.push(new User(req.body.DNI, req.body.nombre, req.body.usuario, req.body.contraseña))
});

/*-----------------*/

app.get('/', function(req, res)
{
      res.render('home', {layout : 'index'}); 
});


app.get('/login', function(req, res)
{
    //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
    res.render('login2', null); //Renderizo página "home" sin pasar ningún objeto a Handlebars
});

app.post('/logueo', async (req, res)=>
{
        const col = req.body.usuario;

        console.log(col);

        if (col == "admin") {
           res.render('adminMenu', { mensaje:"bienvenido", usuario: col});
        }else{
           res.render('jugador', { mensaje:"bienvenido", usuario: col});
        }
});
//--------------------------
app.post('/preguntaPuntos', async (req, res)=>
{
    const usua = req.body.usuario;
    const ps = req.body.pass;
    
        alert("RESPUESTA CORRECTA");
 });



//app.get('/seleccionarOpcion', async function seleccionarOpcion(index) {
  async function seleccionarOpcion(){

};
 /*   let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
    if (validezRespuesta) {
      await Swal.fire({
        title: "Respuesta correcta",
        text: "La respuesta ha sido correcta",
        icon: "success",
      });
      puntaje++;
    } else {
      await Swal.fire({
        title: "Respuesta Incorrecta",
        html: `La respuesta correcta es ${objetoPregunta.respuesta}`,
        icon: "error",
      });
    }
    INDEX_PREGUNTA++;
    if (INDEX_PREGUNTA >= baseDePreguntas.length) {
      await Swal.fire({
        title: "Juego términado",
        text: `Tu puntaje fue de: ${puntaje}/${baseDePreguntas.length}`,
      });
      INDEX_PREGUNTA = 0;
      puntaje = 0;
    }
    cargarPregunta(INDEX_PREGUNTA);
    */
  

//----------------------------
app.post('/jugar', async (req, res)=>
{

    let puntos = 0;
    const usua = req.body.usuario;
    const cat = "historia";
    const cantpreg = 5;
    var id = 4;
    var i = 0;
    

   // getData();

    paqueteDePreguntas = await MySQL.realizarQuery(`SELECT * FROM preguntas`)
  //  let pregunta = await MySQL.realizarQuery(`SELECT * FROM preguntas WHERE id = "${id}"`)

  
    if (paqueteDePreguntas.length > 0) {

/* 
        const preg = pregunta[i].pregunta
        const resp = pregunta[i].correcta
        const inco1 = pregunta[i].incorrecta1
        const inco2 = pregunta[i].incorrecta2
        const inco3 = pregunta[i].incorrecta3
        const categ = pregunta[i].categoria
        const imagen = pregunta[i].imagen
        
        const imgsrc = '/img/' + imagen + '.jpg'

  */      
       // res.render('juego', { mensaje:"bienvenido", pregunta: preg, respuesta: resp, inco1:inco1, inco2:inco2, inco3:inco3, cat:categ, imagen:imgsrc});

      // document.getElementById("pregunta").innerHTML = paqueteDePreguntas[2].pregunta; //objetoPregunta.pregunta;
        res.render('juego', { mensaje: "Bienvenido" });

    }
    else{
        alert("No se pudo cargar la pregunta");
    }

});

app.post('/pregunta', async (req, res) =>{
     
    
    const preg = req.body.preg;
    const resp = req.body.resp;
    const inc1 = req.body.inc1;
    const inc2 = req.body.inc2
    const inc3 = req.body.inc3;
    const cat  = req.body.cat;
    const ima = "";

    const dev = await MySQL.realizarInsert(`INSERT INTO preguntas ( pregunta, correcta, incorrecta1, incorrecta2, incorrecta3, categoria, imagen) VALUES ( "${preg}", "${resp}", "${inc1}", "${inc2}","${inc3}", "${cat}", "${ima}")`) 

    if (dev == "1") {

     //   res.render('registrado2', { mensaje:"Se ha registrado Exitosamente!!!"} );
       alert( " Se ha guardado la pregunta" );
    }
    else{
        console.log(dev);
        alert("No se pudo guardar la pregunta");
    }
    //user.push(new User(req.body.DNI, req.body.nombre, req.body.usuario, req.body.contraseña))
});

//-----------------
app.post('/borrarPregunta', async function(req, res) {

      const id = req.body.preguntaId;
      //Elimino la pregunta por id ingresado  
      await MySQL.realizarQuery(`DELETE FROM preguntas WHERE id = "${id}"`)

      //Listo Pido la lista de preguntas para actualizar la vista 
      let paqueteDePreguntas = await MySQL.realizarQuery(`SELECT * FROM preguntas`)
      //let pregunta = await MySQL.realizarQuery(`SELECT * FROM preguntas WHERE id = "${id}"`)
 
      if (paqueteDePreguntas.length > 0) {
        const vector = [] 

         for (var i = 0; i < paqueteDePreguntas.length; i++) {      
           cadena= `${paqueteDePreguntas[i].id} / ${paqueteDePreguntas[i].pregunta}`
           vector.push(cadena); 
         }

       //  res.send({validar: true, data: paqueteDePreguntas })
       res.render('adminBaja', { vector: vector  });
     }else{
       alert("No se pudo cargar la pregunta");
     }

    });

//-------------------
app.get('/baja', async function(req, res) {
  
     let paqueteDePreguntas = await MySQL.realizarQuery(`SELECT * FROM preguntas`)
    //  let pregunta = await MySQL.realizarQuery(`SELECT * FROM preguntas WHERE id = "${id}"`)
  
       if (paqueteDePreguntas.length > 0) {
         const vector = [] 

          for (var i = 0; i < paqueteDePreguntas.length; i++) {      
            cadena= `${paqueteDePreguntas[i].id} / ${paqueteDePreguntas[i].pregunta}`
            vector.push(cadena); 
          }

        //  res.send({validar: true, data: paqueteDePreguntas })
        res.render('adminBaja', { vector: vector  });
      }else{
        alert("No se pudo cargar la pregunta");
      }


      //console.log(paqueteDePreguntas);
  /* 
          const preg = pregunta[i].pregunta
          const resp = pregunta[i].correcta
          const inco1 = pregunta[i].incorrecta1
          const inco2 = pregunta[i].incorrecta2
          const inco3 = pregunta[i].incorrecta3
          const categ = pregunta[i].categoria
          const imagen = pregunta[i].imagen
          
          const imgsrc = '/img/' + imagen + '.jpg'
  
    */      
         // res.render('juego', { mensaje:"bienvenido", pregunta: preg, respuesta: resp, inco1:inco1, inco2:inco2, inco3:inco3, cat:categ, imagen:imgsrc});
  
        // document.getElementById("pregunta").innerHTML = paqueteDePreguntas[2].pregunta; //objetoPregunta.pregunta;
          //res.render('juego', { mensaje: "Bienvenido" });
  
     // }
     // else{
     //     alert("No se pudo cargar la pregunta");
     // }
  
  });

//---------------
app.get('/puntos', async function(req, res) {
  
    let ranking = await MySQL.realizarQuery(`SELECT * FROM ranking`)
   
      if (ranking.length > 0) {
        const vector = [] 

         for (var i = 0; i < ranking.length; i++) {      
           cadena= `${ranking[i].puesto} / ${ranking[i].usuario} / ${ranking[i].puntos}`
           vector.push(cadena); 
         }

       //  res.send({validar: true, data: paqueteDePreguntas })
       res.render('ranking', { vector: vector  });
     }else{
       alert("No se pudo cargar el ranking");
     }


     //console.log(paqueteDePreguntas);
 /* 
         const preg = pregunta[i].pregunta
         const resp = pregunta[i].correcta
         const inco1 = pregunta[i].incorrecta1
         const inco2 = pregunta[i].incorrecta2
         const inco3 = pregunta[i].incorrecta3
         const categ = pregunta[i].categoria
         const imagen = pregunta[i].imagen
         
         const imgsrc = '/img/' + imagen + '.jpg'
 
   */      
        // res.render('juego', { mensaje:"bienvenido", pregunta: preg, respuesta: resp, inco1:inco1, inco2:inco2, inco3:inco3, cat:categ, imagen:imgsrc});
 
       // document.getElementById("pregunta").innerHTML = paqueteDePreguntas[2].pregunta; //objetoPregunta.pregunta;
         //res.render('juego', { mensaje: "Bienvenido" });
 
    // }
    // else{
    //     alert("No se pudo cargar la pregunta");
    // }
 
 });


//---------------
app.get('/altaPregunta', function(req, res)
{
    res.render('adminAlta', null); 
});    
app.get('/bajaPregunta', function(req, res)
{
    res.render('adminBaja', null); 
});
app.get('/editarPregunta', function(req, res)
{
    res.render('adminEditar', null); 
});

app.get('/adminMenu', function(req, res)
{
    res.render('adminMenu', null); 
});
//------------------
app.post('/login', function(req, res)
{
    res.render('home', null); 
});

app.put('/login', async function(req, res) {
    //Petición PUT con URL = "/login"

    console.log(req.body.user)
    console.log(req.body.pass)
    console.log("Soy un pedido login PUT", null);
    let respuesta = await MySQL.realizarQuery(`SELECT * FROM Usuarios WHERE usuario = "${req.body.user}" AND contraseña = "${req.body.pass}"`)
   if (respuesta.length > 0) {
    console.log("Validado");
    res.send({validar:true})
   }
   else{
    console.log("NO Validado");
    res.send({validar:false})    
   }
    
});

app.delete('/login', function(req, res) {
    //Petición DELETE con URL = "/login"
    console.log("Soy un pedido DELETE", req.body); 
    res.send(null);
});

