import type { Metadata } from "next";
import { ActionLink } from "@/app/components/action-link";
import { PortfolioMarquee } from "@/app/components/portfolio-marquee";
import { SectionHeading } from "@/app/components/section-heading";
import { featuredProjects, heroStats, processSteps, serviceItems } from "@/app/lib/site-data";

export const metadata: Metadata = {
	title: "Accueil",
	description:
		"Studio d'intérieur éditorial pour concevoir des lieux élégants, lisibles et durables.",
};

export default function HomePage() {
	return (
		<div className="grid gap-16 lg:gap-24">
			<section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
				<div className="max-w-3xl">
					<p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-strong">
						Studio d&apos;intérieur sur mesure
					</p>
					<h1 className="mt-6 text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
						Des intérieurs calmes, structurés et lumineux.
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
						Angie Atelier imagine des espaces résidentiels où la matière, la lumière et les usages
						se répondent avec justesse. Chaque projet combine direction artistique, précision
						technique et finitions durables.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<ActionLink href="/projets">Découvrir les projets</ActionLink>
						<ActionLink href="/contact" variant="secondary">
							Parler du projet
						</ActionLink>
					</div>

					<div className="mt-10 grid gap-4 sm:grid-cols-3">
						{heroStats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-[1.75rem] border border-[color:var(--border)] bg-[rgba(255,250,244,0.72)] p-5 shadow-[0_10px_30px_rgba(27,21,16,0.05)]"
							>
								<p className="text-3xl font-semibold text-foreground">{stat.value}</p>
								<p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{stat.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<PortfolioMarquee />


			<section className="rounded-[2rem] border border-[color:var(--border)] bg-foreground px-6 py-10 text-background shadow-[0_18px_60px_rgba(27,21,16,0.16)] sm:px-10 sm:py-12">
				<div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div className="max-w-3xl">
						<p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(246,240,231,0.68)]">
							Prêt à démarrer
						</p>
						<h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
							Vous avez un lieu à transformer ? Construisons une direction claire.
						</h2>
						<p className="mt-4 text-base leading-7 text-[rgba(246,240,231,0.8)]">
							Je peux vous accompagner sur une rénovation complète, une pièce de vie, ou une simple
							remise en cohérence décorative avec une méthode simple et maîtrisée.
						</p>
					</div>
					<ActionLink href="/contact" variant="secondary" className="border-0 bg-background text-foreground hover:bg-surface">
						Demander un échange
					</ActionLink>
				</div>
			</section>
		</div>
	);
}
