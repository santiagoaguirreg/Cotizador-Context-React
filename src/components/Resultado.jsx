import { Fragment, useCallback, useMemo, useRef } from 'react'
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from '../constants'

const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos

    console.log(Number(marca))

    var nombreMarca;

    if(marca == 1) {
        nombreMarca = "Europeo";
    } else if(marca == 2) {
        nombreMarca = "Americano";
    } else {
        nombreMarca = "Asiatico";
    }

   
    // const yearRef = useRef(year)

    // const [nombreMarca] = useCallback( 
    //     MARCAS.filter(m => m.id === Number(marca) ), 
    //     [ resultado]
    // )
    // const [nombrePlan] = useCallback( 
    //     PLANES.filter(p => p.id === Number(plan) ), 
    //     [resultado]
    // )

    if(resultado === 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca}
            </p>

            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {plan}
            </p>

            <Fragment>
            <p className="my-2">
                <span className="font-bold">Año del Auto: </span>
                {year}
            </p>
            </Fragment>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotización: </span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado