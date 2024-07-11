import { domains as data } from "@/server/domains";
import Link from "next/link";
import Header from "../_components/Header";

export default function DomainList() {
  const domains = shuffleArray(data);
  return (
    <>
      <Header number={domains.length} />

      <div className="w-full bg-secondary">
        <section className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-8 py-6 text-left px-6">
          <div className="flex flex-wrap gap-4 ">
            {domains.map((domain) => (
              <Link
                href={`https://${domain.name}`}
                key={domain.name}
                prefetch={false}
                className="bg-background p-2 px-4 rounded-md hover:bg-black hover:text-white text-sm"
              >
                {domain.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

function shuffleArray(array: any[]) {
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
