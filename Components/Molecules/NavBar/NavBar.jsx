import Link from "next/link";
import Image from "next/image";

export const NavBar = () => {
  return (
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
        <Link href='/AddMemberScreen' className="rounded">
          <button className='text-text text-sm px-2 py-1 h-full text-center rounded hover:bg-btnhover'>Agregar integrante</button>
        </Link>
        <Link href='/LoginScreen' className='text-sm'>
          <button className='text-text text-sm px-2 py-1 h-full text-center rounded hover:bg-btnhover'>Iniciar sesión</button>
        </Link>
        <Link href='/SignUpScreen' className='text-sm'>
          <button className='text-text text-sm px-2 py-1 h-full text-center rounded hover:bg-btnhover'>Regístrate</button>
        </Link>
        {/* <button className='text-text px-2 py-1 text-center rounded-t hover:bg-btnhover'>
          <Link href='/AddMemberScreen' className='text-sm'>Agregar integrante</Link>
        </button>
        <button className='text-text px-2 py-1 text-center rounded-t hover:bg-btnhover'>
          <Link href='/LoginScreen' className='text-sm'>Iniciar sesión</Link>
        </button>
        <button className='text-text px-2 py-1 text-center rounded-t hover:bg-btnhover'>
          <Link href='/' className='text-sm'>Regístrate</Link>
        </button> */}
      </div>
    </nav>
  );
}