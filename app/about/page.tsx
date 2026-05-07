import type { Metadata } from "next";
import { SectionHeading } from "@/app/components/section-heading";

export const metadata: Metadata = {
	title: "À propos",
	description:
		"Découvrir la vision, la méthode et les valeurs du studio Angie Atelier.",
};

export default function AboutPage() {
	return (
		<div className="grid gap-16">
			<section className="max-w-3xl">
				<p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-strong">À propos</p>
				<h1 className="mt-6 text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl">
					Un studio qui privilégie la clarté, la matière et la justesse.
				</h1>
				<p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
					Angie Atelier conçoit des intérieurs qui restent lisibles dans le temps. L&apos;objectif n&apos;est
					pas de multiplier les effets, mais d&apos;obtenir un ensemble cohérent, durable et facile à
					vivre.
				</p>
			</section>

			<section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<aside className="rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,250,244,0.95),rgba(240,230,217,0.95))] p-8 shadow-[0_18px_60px_rgba(27,21,16,0.08)]">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">Vision</p>
					<p className="mt-6 text-2xl font-semibold leading-tight text-foreground">
						Une esthétique calme, avec des volumes nets et une matière qui raconte quelque chose.
					</p>
					<div className="mt-8 grid gap-4 text-base leading-7 text-[color:var(--muted)]">
						<p>Chaque décision part de l&apos;usage réel et des contraintes du lieu.</p>
						<p>Le mobilier et les finitions sont sélectionnés pour créer de la continuité.</p>
						<p>Le résultat final doit rester élégant sans devenir fragile ni trop démonstratif.</p>
					</div>
				</aside>

				<div className="space-y-8">
					<SectionHeading
						eyebrow="Valeurs"
						title="Une méthode fondée sur la précision et le respect du contexte."
						description="Le studio s&apos;appuie sur trois principes simples pour maintenir une qualité constante d&apos;un projet à l&apos;autre."
					/>
					<div className="grid gap-4">
						{[
							{
								title: "Rigueur",
								description: "Des arbitrages clairs pour garder un fil conducteur à chaque étape.",
							},
							{
								title: "Sobriété",
								description: "Une écriture visuelle réduite à l&apos;essentiel pour mieux révéler le lieu.",
							},
							{
								title: "Durabilité",
								description: "Des choix tenus dans le temps, autant sur le plan esthétique que fonctionnel.",
							},
						].map((value) => (
							<article
								key={value.title}
								className="rounded-[1.75rem] border border-[color:var(--border)] bg-surface p-5"
							>
								<h2 className="text-xl font-semibold text-foreground">{value.title}</h2>
								<p className="mt-2 text-base leading-7 text-[color:var(--muted)]">{value.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
