type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-strong">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}