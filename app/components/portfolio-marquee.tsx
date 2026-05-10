import Image from "next/image";

const portfolioImages = [
  {
    src: "/portfolio/1.jpg",
    alt: "Salle de vie éditorial aux tons sable, bois blond et travertin",
    title: "Salle de vie",
    label: "Résidentiel · lumière douce",
  },
  {
    src: "/portfolio/2.jpg",
    alt: "Studio contemporain avec matières naturelles et lignes calmes",
    title: "Studio",
    label: "Matières naturelles · symétrie",
  },
  {
    src: "/portfolio/3.jpg",
    alt: "Studio minimaliste avec textiles clairs et tête de lit en enduit",
    title: "Studio",
    label: "Textiles doux · atmosphère feutrée",
  },
  {
    src: "/portfolio/4.jpg",
    alt: "Studio avec pierre claire, bois mi-clair et éclairage nettoyé",
    title: "Studio",
    label: "Pierre claire · détails précis",
  },
];

export function PortfolioMarquee() {
  return (
    <section className="rounded-[2rem] border border-[color:var(--border)] bg-[rgba(255,250,244,0.82)] px-4 py-8 shadow-[0_14px_50px_rgba(27,21,16,0.06)] sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Mes projets
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
            Des compositions sobres, lumineuses et matérialisées pour évoquer un portfolio de
            designer d&apos;intérieur contemporain, sans alourdir le chargement.
          </p>
        </div>

        <div className="marquee-mask mt-8 overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-[rgba(255,255,255,0.36)] px-3 py-4 sm:px-4">
          <div className="marquee-track flex w-max gap-4 will-change-transform motion-reduce:animate-none">
            {[...portfolioImages, ...portfolioImages].map((item, index) => {
              const isDuplicate = index >= portfolioImages.length;

              return (
                <article
                  key={`${item.src}-${index}`}
                  aria-hidden={isDuplicate}
                  className="marquee-card relative min-w-[16rem] max-w-[16rem] overflow-hidden rounded-[1.5rem] border border-[color:var(--border)] bg-surface shadow-[0_10px_30px_rgba(27,21,16,0.08)] sm:min-w-[18rem] sm:max-w-[18rem] lg:min-w-[20rem] lg:max-w-[20rem]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={isDuplicate ? "" : item.alt}
                      fill
                      sizes="(max-width: 640px) 16rem, (max-width: 1024px) 18rem, 20rem"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(27,21,16,0.7))] px-4 py-4 text-background">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em]">{item.title}</p>
                    <p className="mt-1 text-xs tracking-[0.14em] text-[rgba(246,240,231,0.82)]">
                      {item.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
