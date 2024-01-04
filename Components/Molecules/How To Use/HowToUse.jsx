export const HowToUse = () =>{


    return(
        <section className='flex flex-col pt-40 pb-8 gap-16'>
        <h3 className='text-text text-3xl text-center w-full'>¿Cómo puedo usar TechNova?</h3>
        <div className='flex flex-col px-56'>
          <div className='flex gap-20'>
            <div className='flex flex-col items-center self-stretch'>
              <div className='bg-primary w-14 h-14 flex items-center justify-center text-white rounded-full'>1</div>
              <div className='bg-primary h-14 w-1 flex grow'></div>
            </div>
            <div className='flex flex-col gap-5 pb-16'>
              <h5 className='text-lg text-text'>Realiza tu registro</h5>
              <p className='text-text text-sm leading-7'>Crea un entorno de gestión de proyectos único para tu equipo. Solamente los usuarios que tú decidas agregar 
                podrán tener acceso a este espacio. Los integrantes de tu equipo de trabajo no podrán “crear una cuenta”. Tú 
                se las otorgas. <br />

                Para poder conseguir nuestro entorno de gestión de proyectos, es necesario que adquieras nuestro plan único. 
                Puede ser pagado anualmente o mensualmente :)</p>
              <button className='bg-primary hover:bg-[#32A0DD] text-white px-6 py-4 rounded-lg w-fit transition-all duration-150'>Regístrate</button>
            </div>
          </div>
          <div className='flex gap-20'>
            <div className='flex flex-col items-center self-stretch'>
              <div className='bg-primary w-14 h-14 flex items-center justify-center text-white rounded-full'>2</div>
              <div className='bg-primary h-14 w-1 flex grow'></div>
            </div>
            <div className='flex flex-col gap-5 pb-16'>
              <h5 className='text-lg text-text'>Registra a tu equipo</h5>
              <p className='text-text text-sm leading-7'>Una vez que tengas creado tu entorno, basta con que vayas a la página de agregar integrantes y configures 
              las cuentas de tus integrantes. Puedes agregar más integrantes en cualquier momento. A cada integrante registrado se le hará llegar un correo electrónico 
              donde se le especifique que fue agregado a un equipo en Tech Nova, indicándole su correo y contraseña (que en un primer inicio, será puesta por usted).
              </p>
              <button className='bg-primary hover:bg-[#32A0DD] text-white px-6 py-4 rounded-lg w-fit transition-all duration-150'>Agrega a tu equipo</button>
            </div>
          </div>
          <div className='flex gap-20'>
            <div className='flex flex-col items-center self-stretch'>
              <div className='bg-primary w-14 h-14 flex items-center justify-center text-white rounded-full'>3</div>
              {/* <div className='bg-primary h-14 w-2 flex grow'></div> */}
            </div>
            <div className='flex flex-col gap-5 pb-16'>
              <h5 className='text-lg text-text'>Todo listo</h5>
              <p className='text-text text-sm leading-7'>Empieza a usar todas las herramientas que Tech Nova tiene para tu equipo y para ti. Todos los integrantes 
              del equipo que se hayan agregado en el paso 2 estarán iniciando sesión con el rol de un usuario normal. Los usuarios normales no pueden crear nuevos proyectos, 
              solo pueden participar en los que se le indiquen. El rol que puede crear proyectos son los administradores.
              </p>
              <button className='bg-primary hover:bg-[#32A0DD] text-white px-6 py-4 rounded-lg w-fit transition-all duration-150'>Inicia sesión</button>
            </div>
          </div>
        </div>
      </section>
    );
}