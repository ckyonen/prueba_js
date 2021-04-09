import React, { Component } from 'react'
import EscalabIcon from '../../assets/cmsg.jpg'
import './style.css'



class AppHeaders extends Component  {

    llamarAlerta = () => { alert('www.cmsg.cl')}

    render(){
        // Debe ir un return con el UI a mostrar
        return(
            <div
                className="header"
                style={{
                    backgroundColor: 'silver'
                }}

                onClick={this.llamarAlerta}

            >
                <img alt="header" className="icon" src={EscalabIcon} />
                <p>API BUK</p>
            </div>
        )
    }
}






export default AppHeaders;