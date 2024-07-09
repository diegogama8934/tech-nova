import Link from "next/link";


export default function AppLayout({ children }: { children: React.ReactNode }) {


  return (
    <div className="flex">
      <nav className="flex flex-col h-screen p-4 bg-zinc-50">
        <Link href="/dashboard/home" className="bg-blue-500">Inicio</Link>
      </nav>
      {children}
    </div>
  );
}