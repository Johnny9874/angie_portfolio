import type { Metadata } from "next";
import { ActionLink } from "@/app/components/action-link";
import { ContactForm } from "@/app/components/contact-form";
import { SectionHeading } from "@/app/components/section-heading";
import { contactChannels } from "@/app/lib/site-data";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Entrer en contact avec Angie Atelier pour un projet d&apos;intérieur résidentiel ou une demande de devis.",
};

export default function ContactPage() {
	return (
		<div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<section className="space-y-8">
				<div className="max-w-2xl">
					<p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-strong">Contact</p>
					<h1 className="mt-6 text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl">
						Parlons de votre espace et du niveau d&apos;accompagnement souhaité.
					</h1>
					<p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
						Vous pouvez écrire pour une rénovation complète, une pièce ciblée ou une mission de
						décoration. Je reviens vers vous avec une première lecture du projet et des prochaines
						étapes.
					</p>
				</div>

				<div className="grid gap-4">
					{contactChannels.map((channel) => (
						<article
							key={channel.label}
							className="rounded-[1.75rem] border border-[color:var(--border)] bg-surface p-5"
						>
							<p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-strong">
								{channel.label}
							</p>
							<ActionLink href={channel.href} variant="ghost" className="mt-3 justify-start px-0 text-base">
								{channel.value}
							</ActionLink>
						</article>
					))}
				</div>
			</section>

			<section className="space-y-6">
				<SectionHeading
					eyebrow="Formulaire"
					title="Un formulaire simple et rapide pour cadrer votre demande."
					description="Les champs permettent de comprendre votre projet avant le premier échange et de gagner du temps dès le départ."
				/>
				<ContactForm />
			</section>
		</div>
	);
}
