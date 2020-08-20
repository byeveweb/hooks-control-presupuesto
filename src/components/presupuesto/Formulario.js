import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Error from './../error/error'
import shortid from 'shortid'

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    //Gasto
    const [nombre, guadarNombre] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        //Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)

        //construir el gasto
        const gasto = {
            nombre, cantidad, id: shortid.generate()
        }



        //pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        //resetear el form
        guadarNombre('')
        guardarCantidad(0)
    }


    return (

        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guadarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary -u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}


Formulario.propType = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired

}
export default Formulario;