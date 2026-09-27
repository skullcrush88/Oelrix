import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Work | Oelrix",
  description: "Selected websites, brand systems, and digital experiences created by Oelrix.",
  alternates: {
    canonical: "https://www.oelrix.com/work",
  },
  openGraph: {
    title: "Work | Oelrix",
    description: "Selected websites, brand systems, and digital experiences created by Oelrix.",
    url: "https://www.oelrix.com/work",
    type: "website",
  },
};

const projects = [
  {
    name: "NOXE",
    description: "Luxury fragrance brand website concept.",
    href: "/project/noxe",
    image: "/NOXE.png",
  },
  {
    name: "ARCUS",
    description: "Architecture and interior design studio website concept.",
    href: "/project/arcus",
    image: "/ARCUS.png",
  },
  {
    name: "VELOX",
    description: "Electric vehicle product launch website concept.",
    href: "/project/velox",
    image: "/Velox.jpg",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-24 pt-32 text-white md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.5em] text-white/50">Work</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
          Selected work.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          A selection of websites, brand systems, and digital experiences created by Oelrix.
        </p>

        <nav aria-label="Work projects" className="mt-16 grid gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="group block">
              <div className="overflow-hidden border border-white/10 bg-white/[0.03]">
                <Image
                  src={project.image}
                  alt={`${project.name} website concept by Oelrix`}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{project.name}</h2>
                  <p className="mt-2 text-sm text-white/50">{project.description}</p>
                </div>
                <span aria-hidden="true" className="text-xl text-white/50 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
      <Footer />
    </main>
  );
}
