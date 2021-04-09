import React, { Component } from 'react'
import './style.css'



class Timeout extends Component  {

      render(){
        // Debe ir un return con el UI a mostrar
        return(
            <div
                className="header"
                style={{
                    backgroundColor: 'silver'
                }}

            >

                <p>CARGANDO........(Uso de Set Time Out)</p>
            </div>
        )
    }
}






export default Timeout;