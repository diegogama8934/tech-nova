import Image from "next/image";


export const Footer = () => {


    return(
        <section>
        <Image
          src='forma-footer.svg'
          width={100}
          height={100}
          alt='fondo'
          className='w-full'
        />

        <div className='bg-primary h-64 -mt-2'>
          <h3 className='text-white text-3xl text-center'>TechNova</h3>
          <p className='text-white text-sm leading-7 text-center'><b>Materia:</b> Frameworks y arquitectura de software.</p>
          <p className='text-white text-sm leading-7 text-center'><b>Docente:</b> Gabriela Pacheco Sánchez.</p>
          <p className='text-white text-sm leading-7 text-center'><b>Integrantes:</b></p>
          <ul className='list-disc'>
            <li className='text-white text-sm leading-7 text-center'>Diego Martínez García</li>
            <li className='text-white text-sm leading-7 text-center'>Rafael Bárcena González</li>
          </ul>
        </div>
      </section>
    );
}