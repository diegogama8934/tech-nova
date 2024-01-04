import Image from "next/image";


export const MisionVision = () => {
    return(
        <section>
            
            <Image
                src='forma-mision-vision.svg'
                width={10}
                height={10}
                alt='fondo'
                className='w-full'
            />

            <div className='flex gap-10 bg-primary w-full h-[32rem] justify-center'>
                <div className='flex flex-col justify-center items-center w-1/4 gap-8'>
                <h3 className='text-3xl text-white'>Vision</h3>
                <p className='text-sm text-white leading-7 text-center'>Nuestra visión es ser líderes reconocidos a nivel mundial en el desarrollo de software 
                personalizado y servicios de tecnología, marcando la pauta en la innovación tecnológica y creando un impacto positivo en la sociedad a través de 
                nuestras soluciones.</p>
                </div>
                <div className='flex flex-col justify-center items-center w-1/4 gap-8'>
                <h3 className='text-3xl text-white'>Mision</h3>
                <p className='text-sm text-white leading-7 text-center'>Nuestra misión es empoderar a las organizaciones para que alcancen el éxito en sus proyectos, 
                    ofreciendo soluciones de gestión de proyectos de alta calidad y asesoramiento experto. Trabajamos 
                    de la mano de nuestros clientes para optimizar sus procesos y asegurar la entrega oportuna y rentable 
                    de proyectos exitosos.</p>
                </div>
            </div>
        </section>
    );
}