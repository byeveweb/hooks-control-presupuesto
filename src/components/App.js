import React, { useState, useEffect } from 'react';

import Pregunta from './presupuesto/Pregunta'
import Formulario from './presupuesto/Formulario'
import Listado from './presupuesto/Listado'
import ControlPresupuesto from './presupuesto/ControlPresupuesto'




function App() {

  //definir el state
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [creargasto, guardarCrearGasto] = useState(false)


  //useEfect que actualiza el restante
  useEffect(() => {


    if (creargasto) {
      //agrega al nuevo presupuesto
      guardarGastos([...gastos, gasto])

      //resta
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)

      //resetear
      guardarCrearGasto(false)
    }
  }, [gasto, creargasto, gastos, restante])



  return (
    <>
      <div className="container">
        <header>
          <h1>Gasto semanal</h1>
          <div className="contenido-principal contenido">
            {mostrarpregunta ?
              (<Pregunta
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
              )
              :
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto} />
                  </div>
                  <div className="one-half column">
                    <Listado
                      gastos={gastos} />
                    <ControlPresupuesto
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                  </div>
                </div>
              )}



          </div>


        </header>
      </div>
    </>
  );
}

export default App;
