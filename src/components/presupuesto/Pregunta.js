import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './../error/error'


const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
    // console.log('---', cantidad)

    //Lee presupuesto
    const definirPresupuesto = e => {
        console.log(parseInt(e.target.value))
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //Submit definine el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault()

        //Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return
        }

        //Si pasa la validadción
        guardarError(false)
        console.log(cantidad)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }

    return (

        <>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
    );
}

Pregunta.propType = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired

}


export default Pregunta;