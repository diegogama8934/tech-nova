'use client'
import { useState } from "react"

export const PersonalFieldset = () => {
    
    const [errors, setErrors] = useState({
        nombre: false,
        apellidoPaterno: false,
        apellidoMaterno: false
    })

    const [contenido, setContenido] = useState({
        name: '',
        apellidoPaterno: '',
        apellidoMaterno: ''
    })
    
    const onInputContent = ({target}) => {
        const { value, name } = target;
        setContenido({
            ...contenido,
            [name] : value
        })

        console.log(contenido);
    }

    return (
        <fieldset className="flex gap-8">
            <div className="flex gap-2 flex-col grow shrink">
                <label htmlFor="Nombre">Nombre(s)</label>
                <input type="text" id="Nombre" placeholder="Escribe tu nombre(s)" onChange={onInputContent}
                    className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" name="nombre"
                />
            </div>
            <div className="flex gap-2 flex-col self-stretch grow shrink">
                <label htmlFor="ApellidoP">Apellido paterno</label>
                <input type="text" id="ApellidoP" placeholder="Escribe tu apellido paterno" onChange={onInputContent}
                    className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" name="apellidoPaterno"
                />
            </div>
            <div className="flex gap-2 flex-col self-stretch grow shrink">
                <label htmlFor="ApellidoM">Apellido materno</label>
                <input type="text" id="ApellidoM" placeholder="Escribe tu apellido materno" onChange={onInputContent}
                    className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" name="apellidoMaterno"
                />
            </div>
        </fieldset>
    )
}
