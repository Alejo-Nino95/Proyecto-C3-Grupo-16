function validateForm(_e){
    
    let user=document.forms["loginForm"]["doc"].value;
    if(user === ""){
        alert("Debe ingresar el Usuario");
    }
    let pass=document.forms["loginForm"]["pass"].value;
    if(pass === ""){
        alert("Debe ingresar la contraseña");
    }
    // alert(`este es el usuario: ${user} y esta es la contraseña: ${pass}`);
    //let objetoForm={usuario:michelpparada,clave:123456};
    alert("Usuario y contraseña enviadas correctamente");


}