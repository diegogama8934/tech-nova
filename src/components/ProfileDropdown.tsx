"use client"
import { useState } from "react";
import type { DropMenu } from "@/interfaces/ComponentsProps";
import Image from "next/image";
import Link from "next/link";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="flex gap-2 items-center text-zinc-600 hover:bg-zinc-100 rounded-full p-2 relative z-10"
      onClick={() => setIsOpen(!isOpen)}>

      <Image
        src="/yo3.jpeg"
        alt="Avatar"
        width={40}
        height={40}
        className="w-10 h-10 object-cover rounded-full"
      />
      Diego Martínez García

      <DropMenu isOpen={isOpen} />

    </button>
  );
}

function DropMenu({ isOpen }: DropMenu) {

  return (
    <div className={`${isOpen ? "flex" : "hidden"} absolute top-16 left-0 w-full transition-all rounded-md flex-col gap-2`}    >

      <Link href="/dashboard/home" className="rounded-md p-2 hover:bg-zinc-50 w-full text-start">Configuración</Link>

      <button className="rounded-md p-2 hover:bg-zinc-50 w-full text-start">Claro / Oscuro</button>

      <button className="rounded-md p-2 text-white bg-red-500 hover:bg-red-600 w-full text-start transition-all">Cerrar sesión</button>

    </div>
  );
}