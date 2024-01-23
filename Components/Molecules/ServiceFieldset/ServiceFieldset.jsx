
export const ServiceFieldset = () => {
    return (
        <fieldset className="flex flex-col items-center gap-2">
            <div>
                <input type="radio" id="PagoAnual" name="Pago" className="mr-2" />
                <label htmlFor="PagoAnual">Pago anual (6588 MXN / Año)</label>
            </div>
            <div>
                <input type="radio" id="PagoMensual" name="Pago" className="mr-2" />
                <label htmlFor="PagoMensual">Pago mensual (549 MXN / Mes)</label>
            </div>
        </fieldset>
    )
}
