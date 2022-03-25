import React, {useState} from 'react'

const useSelect = (stateInicial, opciones) => {

    // state del custom hook
    const [ state, actualizarState ] = useState (stateInicial); // el state inicial toma 'general' porque es la primera opcion que paso en el formulario al state
    
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value = {state}
            onChange = {e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key = {opcion.value}>{opcion.label}</option>
            ))};

        </select>
    );

    return [state, SelectNoticias]
    
}
 
export default useSelect;