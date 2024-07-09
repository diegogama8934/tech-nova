import { ProfileDropdown } from "./ProfileDropdown";
import type { PageHeader } from "@/interfaces/ComponentsProps";


export function PageHeader({ title }: PageHeader) {


  return (
    <header className="flex justify-between items-center">
      <h1 className="text-3xl text-zinc-700">{title}</h1>

      <ProfileDropdown />
    </header>
  );
}


