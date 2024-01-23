
export const AccountFieldSet = () => {
    return (
        <fieldset className="flex flex-col gap-4 mb-8">
            <div className="flex self-stretch gap-8">
                <div className="flex gap-2 flex-col w-full">
                    <label htmlFor="Email">Correo electrónico</label>
                    <input type="email" id="Email" placeholder="example@example.com" className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" />
                </div>
                <div className="flex gap-2 flex-col w-full">
                    <label htmlFor="ConfirmEmail">Confirma tu correo electrónico</label>
                    <input type="email" id="ConfirmEmail" placeholder="example@example.com" className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" />
                </div>
            </div>

            <div className="flex self-stretch gap-8">
                <div className="flex gap-2 flex-col w-full">
                    <label htmlFor="Password">Contraseña</label>
                    <input type="password" id="Password" placeholder="*************" className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" />
                </div>
                <div className="flex gap-2 flex-col w-full">
                    <label htmlFor="ConfirmPassword">Confirma tu contraseña</label>
                    <input type="password" id="ConfirmPassword" placeholder="*************" className="p-2 rounded text-sm bg-inputColor focus-visible:outline-primary" />
                </div>
            </div>

            <div>
                <p className="text-text opacity-50">Tu contraseña debe contener:</p>
                <ul className="ml-12 list-disc text-text opacity-50">
                    <li className="">Mínimo 8 caractéres.</li>
                    <li className="">Mínimo 1 número.</li>
                    <li className="">Mínimo 1 letra mayúscula.</li>
                    <li className="">Mínimo 1 símbolo.</li>
                </ul>
            </div>
        </fieldset>
    )
}
