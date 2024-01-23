import Image from "next/image"


export const PaymentSection = () => {
    return (
        <section className="flex gap-8 mb-32 items-stretch">
            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-text text-xl">Métodos de pago</h2>
                <Image
                    src={'metodos-de-pago.svg'}
                    width={0}
                    height={0}
                    alt="Métodos de pago"
                    className="w-96"
                />
                <fieldset className="flex flex-col gap-4 flex-wrap">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Nombre del beneficiario</label>
                        <input type="text" placeholder="Escribe el nombre del beneficiario"
                            className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="">Número de la tarjeta</label>
                        <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX"
                            className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" />
                    </div>
                    <div className="flex gap-2 w-fit items-center">
                        <label htmlFor="" className="w-fit">Fecha de caducidad</label>
                        <input type="text" className="bg-inputColor w-12 text-center rounded p-2" placeholder="MM" />
                        <input type="text" className="bg-inputColor w-12 text-center rounded p-2" placeholder="YY" />
                    </div>
                    <div className="flex gap-2 w-fit items-center">
                        <label htmlFor="">CVV</label>
                        <input type="text" className="bg-inputColor w-14 text-center rounded p-2" placeholder="000" />
                    </div>
                </fieldset>
            </div>
            <div className="flex flex-col box-border w-full bg-white rounded-2xl shadow-xl justify-between items-end">
                <div className="w-full p-8">
                    <h2 className="text-text text-xl">Plan anual</h2>

                    <ul className="list-disc ml-5">
                        <li className="leading-8">El plan se renovará el 4/12/2024.</li>
                        <li className="leading-8">No existen reembolsos.</li>
                        <li className="leading-8">Se recomienda leer los términos y condiciones.</li>
                    </ul>
                </div>

                <div className="flex items-end gap-4 p-8">
                    <span className="text-text">(6558 MXN)</span>
                    <button className="bg-primary w-fit px-8 py-4 rounded-lg text-white">Pagar</button>
                </div>
            </div>
        </section>
    )
}
