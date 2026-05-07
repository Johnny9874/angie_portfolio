import type { Metadata } from "next";
import { ActionLink } from "@/app/components/action-link";
import { SectionHeading } from "@/app/components/section-heading";
import { processSteps, serviceItems } from "@/app/lib/site-data";

export const metadata: Metadata = {
	title: "Services",
	description:
			"Conception, coordination et décoration finale pour des projets résidentiels élégants et durables.",
};

export default function ServicesPage() {
	return (
		<div className="grid gap-16">
			<section className="max-w-3xl">
				<p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-strong">Services</p>
				<h1 className="mt-6 text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl">
					Une offre lisible pour accompagner chaque étape du projet.
				</h1>
				<p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
						Les prestations sont structurées pour rester claires du premier rendez-vous jusqu&apos;aux
					derniers ajustements. Vous gardez une visibilité continue sur les décisions et les délais.
				</p>
			</section>

			<section className="grid gap-5 lg:grid-cols-3">
				{serviceItems.map((service) => (
					<article
						key={service.title}
						className="rounded-[2rem] border border-[color:var(--border)] bg-surface p-6 shadow-[0_10px_30px_rgba(27,21,16,0.05)]"
					>
						<h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
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
			</section>

			<section className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
				<div className="space-y-8">
					<SectionHeading
						eyebrow="Process"
						title="Un pilotage pensé pour sécuriser le projet."
						description="La méthode s&apos;appuie sur trois temps forts pour éviter les itérations inutiles et garder une vision nette du résultat final."
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

				<aside className="rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,250,244,0.95),rgba(240,230,217,0.95))] p-8 shadow-[0_18px_60px_rgba(27,21,16,0.08)]">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">Ce que vous recevez</p>
					<div className="mt-6 grid gap-4 text-base leading-7 text-[color:var(--muted)]">
						<p>Un concept visuel cohérent avec vos usages et votre budget.</p>
						<p>Des arbitrages matériaux et mobilier pensés pour la durabilité.</p>
						<p>Une coordination claire des intervenants jusqu&apos;à la livraison.</p>
					</div>
					<ActionLink href="/contact" className="mt-8 inline-flex">
						Demander un devis
					</ActionLink>
				</aside>
			</section>
		</div>
	);
}
