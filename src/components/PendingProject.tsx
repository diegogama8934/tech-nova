import type { PendingProject } from "@/interfaces/ComponentsProps";
import Link from "next/link";

export function PendingProject({ name, problems, isActive }: PendingProject) {


  return (
    <div className="w-full flex justify-between">

      <span>{name}</span>

      <div className="flex items-center gap-2">

        {problems > 0 && <Link href="/dashboard/home" className={`w-24 rounded`}>{problems} Problemas</Link>}

        <Link href="/dashboard/home" className={`w-32 rounded text-white p-2 text-center ${isActive ? "bg-green-600" : "bg-amber-600"}`}>{isActive ? "Activo" : "Pausado"}</Link>

      </div>
    </div>
  );
}