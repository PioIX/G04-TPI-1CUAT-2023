async function putJSON(data) {
     try{
           const response = await fetch ("/login", {
             method: "PUT", 
             mode: 'no-cors',
             headers: {
             "Content-Type": "application/json",
          },
           body: JSON.stringify(data),
         });
 
         //En result obtengo la respuesta
         const result = await response.json();
         console.log("Success:", result);
 
         if (result.validar == false) {
          alert("Los datos son incorrectos")
         } else {
            
           /// location.href = "/juego?pepe"     
           document.getElementById("form1").submit()
         }
 
     } catch (error) {
       console.error("Error:", error);
     }
 }
 
 /*
 function catJuego() {
    let categoria = document.getElementById("usuarioId").value
    console.log("fsdfsdf");
    let data = {
      cat: categoria
    } 
  putJSON(data)
 }
*/
 function login() {
    console.log("paso por login");
    let usuario = document.getElementById("usuarioId").value
    let contraseña = document.getElementById("passwordId").value
        
    let data = {
        user: usuario,
        pass: contraseña
    }

    putJSON(data)    
}

 