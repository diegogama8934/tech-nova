import { PageHeader } from "@/components/PageHeader";
import { PendingProject } from "@/components/PendingProject";
import { pendingProjects } from "@/utils/fakeData"


export default function HomePage() {


  return (
    <div className="flex flex-col flex-1 p-4">

      <PageHeader title="Inicio" />

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-zinc-600 mb-4">Proyectos pendientes</h2>

        {
          pendingProjects.map((project, index) => (<PendingProject key={index} {...project} />))
        }
      </div>

    </div>
  );
}