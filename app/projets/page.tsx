import type { Metadata } from "next";
import { ActionLink } from "@/app/components/action-link";
import { SectionHeading } from "@/app/components/section-heading";
import { featuredProjects } from "@/app/lib/site-data";

export const metadata: Metadata = {
	title: "Projets",
	description:
		"Portfolio d&apos;intérieurs résidentiels aux lignes sobres, aux matières nobles et aux ambiances apaisées.",
};

export default function ProjectsPage() {
	return (
		<div className="grid gap-16">
			<section className="max-w-3xl">
				<p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-strong">Projets</p>
				<h1 className="mt-6 text-5xl font-semibold leading-[0.95] text-foreground sm:text-6xl">
					Un portfolio de lieux sobres, chaleureux et cohérents.
				</h1>
				<p className="mt-6 text-lg leading-8 text-[color:var(--muted)]">
					Chaque projet est présenté comme une intention complète: contexte, atmosphère, matières et
					continuité d&apos;usage.
				</p>
			</section>

			<section className="grid gap-5 lg:grid-cols-3">
				{featuredProjects.map((project, index) => (
					<article
						key={project.name}
						className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-surface shadow-[0_12px_40px_rgba(27,21,16,0.06)]"
					>
						<div
							className={`min-h-64 bg-[length:180%_180%] ${
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
							<h2 className="mt-4 text-2xl font-semibold text-foreground">{project.name}</h2>
							<p className="mt-3 text-base leading-7 text-[color:var(--muted)]">{project.summary}</p>
							<p className="mt-6 text-sm font-medium text-accent-strong">{project.palette}</p>
						</div>
					</article>
				))}
			</section>

			<section className="rounded-[2rem] border border-[color:var(--border)] bg-foreground px-6 py-10 text-background shadow-[0_18px_60px_rgba(27,21,16,0.16)] sm:px-10 sm:py-12">
				<div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div className="max-w-3xl">
						<SectionHeading
							eyebrow="Approche"
							title="Des images fortes, mais surtout des espaces qui fonctionnent."
							description="Le portfolio montre un design qui repose sur l&apos;équilibre entre sobriété visuelle, circulation naturelle et détail précis."
							align="left"
						/>
					</div>
					<ActionLink href="/contact" variant="secondary" className="border-0 bg-background text-foreground hover:bg-surface">
						Lancer un projet
					</ActionLink>
				</div>
			</section>
		</div>
	);
}
