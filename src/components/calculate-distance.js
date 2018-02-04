import React , { Component } from 'react';
import { connect } from 'react-redux';

import { calculateDistance, getDistance } from '../ducks/calculate'

class CalculateDistanceComponent extends Component{
    constructor(props){
        super(props);
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        let x1 = this.refs.x1.value;
        let y1 = this.refs.y1.value;
        let x2 = this.refs.x2.value;
        let y2 = this.refs.y2.value;

        this.props.getDistance(y1,x1,x2,y2);
    }
    
    render(){
        return(
            //Formulario principal donde recibimos las coordenadas ingresadas por el usuario
            //Se envian al reducer correspondiendte que , mediante el algoritmo, calculara la menor distancia
            //entre esos dos puntos.
            <div>
                <h3 className="mainText">Introduzca las coordenadas</h3>
                <div className="mainContainer">
                    <form onSubmit={this.handleSubmit}>
                        <p className="labelText">Punto de partida:</p>
                        <div className="mainDeparture">
                            <input ref="x1" className="typeText" type="text" />
                            <input ref="y1" className="typeText" type="text" />
                        </div>
                        <p className="labelText">Punto de llegada:</p>
                        <div className="mainDestiny">
                            <input ref="x2" className="typeText" type="text" />
                            <input ref="y2" className="typeText" type="text" />
                        </div>
                        <button className="buttonCalculate" type="submit">Calcular Distancia</button>
                    </form>
                    {this.props.calculate && 
                        <p className="finalDistance">Distancia recorrida: {this.props.calculate}</p>
                    }
                    
                </div>
                
            </div>
        );  
    }
}

const mS = state => {
    return {
      calculate: state.calculate.calculate.dist,
      coords: state.calculate.calculate.coords  
    };
  };
  

const mD = {
    calculateDistance,
    getDistance
}


export default connect(mS, mD)(CalculateDistanceComponent);