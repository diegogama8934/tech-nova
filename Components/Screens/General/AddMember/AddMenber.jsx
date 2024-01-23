import React from "react";
import Link from "next/link";

export default function AddMenber() {
  return (
    <>
      <div className="flex flex-col gap-4 mt-8">
        <h3 className="text-3xl text-text text-center">Agregar integrantes</h3>
        <p className="text-sm text-text text-center">
          Se requiere iniciar sesión
        </p>
      </div>

      <div className="flex px-32 justify-center gap-16 mt-16">
        <div className="flex flex-col gap-8 p-16 items-center bg-white shadow-xl rounded-2xl w-5/12">
          <h5 className="text-xl text-text">Se requiere iniciar sesión</h5>
          <p className="text-sm text-text text-center">
            Se ha detectado que no se tiene una sesión iniciada, para agregar
            integrantes, se necesita iniciar sesión.
          </p>
          <Link
            href="/login"
            className="bg-primary px-6 py-2 rounded text-white w-fit"
          >
            Iniciar sesión
          </Link>
        </div>

        <div className="flex flex-col gap-8 p-16 items-center bg-white shadow-xl rounded-2xl w-5/12">
          <h5 className="text-xl text-text">¿No tiene una cuenta creada?</h5>
          <p className="text-sm text-text text-center">
            Si es la primera vez que usa conoce nuestro programa, cree una
            cuenta.
          </p>
          <Link
            href="/login"
            className="bg-primary px-6 py-2 rounded text-white w-fit"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </>
  );
}
