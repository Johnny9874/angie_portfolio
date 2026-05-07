import type { Metadata } from "next";
import { ActionLink } from "@/app/components/action-link";
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

				<div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-surface p-6 shadow-[0_22px_80px_rgba(27,21,16,0.1)]">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(154,115,77,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(27,21,16,0.08),_transparent_35%)]" />
					<div className="relative grid gap-4">
						<div className="rounded-[1.75rem] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(154,115,77,0.22),rgba(255,250,244,0.95))] p-6">
							<p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
								Direction créative
							</p>
							<p className="mt-6 max-w-xs text-2xl font-semibold leading-tight text-foreground">
								Une signature éditoriale inspirée des intérieurs calmes et raffinés.
							</p>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="rounded-[1.5rem] bg-[rgba(255,250,244,0.9)] p-5">
								<p className="text-sm text-[color:var(--muted)]">Approche</p>
								<p className="mt-2 text-lg font-semibold">Matières naturelles, volumes fluides, rythme visuel.</p>
							</div>
							<div className="rounded-[1.5rem] bg-[rgba(255,250,244,0.9)] p-5">
								<p className="text-sm text-[color:var(--muted)]">Livrables</p>
								<p className="mt-2 text-lg font-semibold">Plans, palette, sourcing et suivi d&apos;exécution.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="space-y-8">
				<SectionHeading
					eyebrow="Services"
					title="Un accompagnement complet, du concept aux finitions."
					description="Chaque mission est cadrée pour conserver une ligne claire, une exécution fluide et un niveau de détail élevé."
				/>
				<div className="grid gap-5 lg:grid-cols-3">
					{serviceItems.map((service) => (
						<article
							key={service.title}
							className="rounded-[2rem] border border-[color:var(--border)] bg-surface p-6 shadow-[0_10px_30px_rgba(27,21,16,0.05)]"
						>
							<h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
							<p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{service.description}</p>
							<ul className="mt-6 grid gap-3 text-sm text-foreground">
								{service.details.map((detail) => (
									<li key={detail} className="flex items-start gap-3">
										<span className="mt-2 h-2 w-2 rounded-full bg-accent" />
										<span>{detail}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</section>

			<section className="space-y-8">
				<SectionHeading
					eyebrow="Sélection"
					title="Des projets résidentiels pensés pour durer."
						description="Le portfolio privilégie la cohérence des matières, la précision des détails et la sensation d&apos;évidence dans l&apos;usage quotidien."
				/>
				<div className="grid gap-5 lg:grid-cols-3">
					{featuredProjects.map((project, index) => (
						<article
							key={project.name}
							className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-surface shadow-[0_12px_40px_rgba(27,21,16,0.06)]"
						>
							<div
								className={`min-h-56 bg-[length:180%_180%] ${
									index === 0
										? "bg-[radial-gradient(circle_at_top_left,_rgba(154,115,77,0.35),_transparent_35%),linear-gradient(135deg,_#f3e6d8,_#fffaf4)]"
										: index === 1
											? "bg-[radial-gradient(circle_at_bottom_right,_rgba(111,77,49,0.32),_transparent_34%),linear-gradient(135deg,_#f7efe5,_#efe1d0)]"
											: "bg-[radial-gradient(circle_at_top_right,_rgba(27,21,16,0.18),_transparent_30%),linear-gradient(135deg,_#f1e6d9,_#fffaf4)]"
								}`}
							/>
							<div className="p-6">
								<div className="flex items-center justify-between gap-3 text-sm text-[color:var(--muted)]">
									<span>{project.location}</span>
									<span>{project.type}</span>
								</div>
								<h3 className="mt-4 text-2xl font-semibold text-foreground">{project.name}</h3>
								<p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{project.summary}</p>
								<p className="mt-6 text-sm font-medium text-accent-strong">{project.palette}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
				<div className="space-y-6">
					<SectionHeading
						eyebrow="Méthode"
						title="Un cadre simple pour garder le projet lisible."
						description="Le déroulé est volontairement réduit à l&apos;essentiel pour éviter les frictions et sécuriser chaque étape."
					/>
					<div className="grid gap-4">
						{processSteps.map((step) => (
							<article
								key={step.step}
								className="grid gap-3 rounded-[1.75rem] border border-[color:var(--border)] bg-surface p-5 sm:grid-cols-[auto_1fr] sm:gap-5"
							>
								<span className="text-lg font-semibold text-accent-strong">{step.step}</span>
								<div>
									<h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
									<p className="mt-2 text-base leading-7 text-[color:var(--muted)]">{step.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>

				<aside className="rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,250,244,0.95),rgba(240,230,217,0.95))] p-8 shadow-[0_22px_80px_rgba(27,21,16,0.08)]">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">Témoignage</p>
					<blockquote className="mt-6 text-2xl font-semibold leading-tight text-foreground">
						“Le projet a gagné en calme et en lisibilité. Chaque détail semble à sa place sans effort.”
					</blockquote>
					<p className="mt-6 text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
						Camille et Hugo · Maison familiale, Lyon
					</p>
				</aside>
			</section>

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
