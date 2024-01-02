import Link from "next/link";
import Image from "next/image";

export const NavBar = () => {
    return(
        <nav className='flex w-full px-6 py-4 justify-between bg-white shadow-md'>
        <Link href='/'>
          <Image
            src="/tech-nova-logo-nombre.svg"
            width={137}
            height={40}
            alt='Tech Nova'
            className='w-32 h-10'
          />
        </Link>
        <div className='flex gap-6'>
          <button className='text-text px-2 py-1 text-center rounded-t hover:bg-btnhover'>
            <Link href='/add' className='text-sm'>Agregar integrante</Link>
          </button>
          <button className='text-text px-2 py-1 text-center rounded-t hover:bg-btnhover'>
            <Link href='/login' className='text-sm'>Iniciar sesión</Link>
          </button>
          <button className='text-text px-2 py-1 text-center rounded-t hover:bg-btnhover'>
            <Link href='/' className='text-sm'>Regístrate</Link>
          </button>
        </div>
      </nav>
    );
}