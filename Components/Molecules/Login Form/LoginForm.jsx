"use client"

import Link from "next/link";


export const LoginForm = () => {


    return(  
        <form className="flex flex-col gap-4 items-center w-96 m-auto" action="">
            {/* <div className="flex flex-col gap-4"> */}
                <label htmlFor="" className="text-left text-text text-sm grow self-stretch">Correo electrónico</label>
                <input className="w-96 p-2 bg-[#f3f4f6] rounded text-sm" type="email" placeholder="example@gmail.com"/>
                <label htmlFor="" className="text-left text-text text-sm grow self-stretch">Contraseña</label>
                <input className="w-96 p-2 bg-[#f3f4f6] rounded text-sm" type="password" placeholder="Escribe tu contraseña"/>
                <div className="flex gap-2">
                    <input type="checkbox" />
                    <p className="text-text text-sm">Recordar datos</p>
                </div>
                <p className="text-text text-sm">¿No recuerdas tu contraseña? <Link href="/login/recoveraccount"><b>Recupera tu cuenta</b></Link>.</p>
                <button className="bg-primary px-6 py-4 rounded text-white">Iniciar sesión</button>
            {/* </div> */}

        </form>
    );
}