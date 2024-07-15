import Link from "next/link";
import type { PendingWork } from "@/interfaces/ComponentsProps";

export function PendingWork({ name, projectId, workId }: PendingWork) {


  return (
    <div className="w-full flex justify-between">

      <span>{name}</span>

      <Link href={`/dashboard/projects/${projectId}/${workId}`} className="w-32 rounded text-white p-2 text-center bg-blue-600">Ver detalles</Link>

    </div>
  );
}