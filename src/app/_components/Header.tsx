"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header({ number }: { number: number }) {
  const router = useRouter();
  return (
    <header className="flex flex-row items-center justify-between max-w-5xl mx-auto w-full text-2xl font-semibold tracking-tighter p-6 py-2 bg-secondary">
      <div
        onClick={() => {
          router.refresh();
        }}
      >
        MoraFeria{" "}
        <span className="text-sm text-black/60 font-normal">
          / domínios ( {number} )
        </span>
      </div>
    </header>
  );
}

function HeaderOld() {
  return (
    <header className="flex flex-row items-center justify-between max-w-5xl mx-auto w-full text-2xl font-semibold tracking-tighter p-6 py-2">
      <Link href="/">
        <div> MoraFeria.com</div>
      </Link>
      <Link href="/dominios">
        <button className="hover:bg-black border border-black hover:text-white p-1 px-4 text-base font-normal bg-transparent text-black">
          domínios
        </button>
      </Link>
    </header>
  );
}
