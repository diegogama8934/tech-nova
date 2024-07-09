import Link from "next/link";


export default function AppLayout({ children }: { children: React.ReactNode }) {


  return (
    <div className="flex">
      <nav>
        <Link href="/dashboard/home">Inicio</Link>
      </nav>
      {children}
    </div>
  );
}