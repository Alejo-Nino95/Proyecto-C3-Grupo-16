import React from "react";
import img_bienvenida from "../../imagenes/ventas.png"
import "./bienvenida.css"

/*  ----------------------------------------------------------------------------------------------
 *
 * El objetivo de esta pantalla es dar una bienvenida al proyecto 
 * 
 * @ Julian Guillermo Zapata Rugeles 
 * 
 *  ----------------------------------------------------------------------------------------------
 */ 



class Bienvenida extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString()
          }
    }


    refrescarHora = () =>{
        this.setState({currentDateTime: Date().toLocaleString()})
    }



    componentDidMount(){
       setInterval(() => {
           this.refrescarHora()
       }, 1000);
    }



    render(){
        return(
            <div className="contenedor">
                <div className="lista-vertical">
                    <div className="imagen">
                        <img className="logo" src={img_bienvenida} alt="no imagen" />
                    </div>
                    <div className="introduccion">
                        <p>Bienvenido al portal de administración </p>
                    </div>
                    <strong> La Hora es : { this.state.currentDateTime }</strong>
                </div>
            </div>
        )
    }
}

export default Bienvenida