import { domains } from "@/server/domains";
import Link from "next/link";

export default function DomainList() {
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col items-left justify-center gap-8 py-12 text-left px-6">
      <h3 className="text-3xl tracking-tighter w-full text-accent font-semibold">
        Algums domínios
      </h3>
      <div className="flex flex-wrap gap-4">
        {domains.slice(0, 10).map((domain) => (
          <div key={domain.name} className="bg-background p-2 px-4 rounded-md">
            <Link href={`https://${domain.name}`}>{domain.name}</Link>
          </div>
        ))}
      </div>
      <Link href="/dominios">
        <button className="hover:bg-black border border-black hover:text-white p-1 px-4 text-base font-normal bg-transparent text-black">
          ver todo
        </button>
      </Link>
    </section>
  );
}
