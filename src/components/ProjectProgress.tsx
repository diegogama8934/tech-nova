import Link from "next/link";
import type { ProjectProgress } from "@/interfaces/ComponentsProps";


export function ProjectProgress({ advance, name, projectId }: ProjectProgress) {


  return (
    <div className="w-full flex justify-between">

      <span>{name}</span>

      <div className="flex items-center gap-2">

        <span>{advance}%</span>

        <Link href={`/dashboard/home`} className="w-32 rounded text-white p-2 text-center bg-blue-600">Ver</Link>

      </div>

    </div>
  );
}