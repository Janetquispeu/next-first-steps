import { Navbar } from "@/components";

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center p-24">
        <span>Hola Mundo</span>
        {children}
      </div>
    </div>
  );
}