import Image from "next/image";

export const Hero = () => {
    return(
        <section className='py-32 flex gap-10 justify-center items-center'>
        <div className='flex flex-col items-center gap-4 w-1/3 '>
          <h3 className='text-3xl'>¿Quiénes somos?</h3>
          <p className='text-sm leading-7 text-center'>TechNova es una empresa líder en el campo de la gestión de proyectos, dedicada a proporcionar soluciones innovadoras y 
            eficientes para la planificación, seguimiento y ejecución de proyectos en diversas industrias. Nuestra experiencia y 
            tecnología de vanguardia permiten a las organizaciones gestionar proyectos de manera efectiva, optimizar recursos y alcanzar
            sus objetivos con éxito.
          </p>
          <button className='bg-primary hover:bg-[#32A0DD] text-white px-6 py-4 rounded-lg transition-all duration-150'>Regístate</button>
        </div>
        <Image
          src='hero-image.svg'
          width={400}
          height={400}
          alt='hero image'
        />
      </section>
    );
}