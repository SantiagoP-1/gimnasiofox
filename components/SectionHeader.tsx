type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  if (align === "center") {
    return (
      <div className="border-t border-white/10 pt-8 text-center">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-fox-gold">
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-fox-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-3 max-w-md text-sm text-fox-gray">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-fox-gold">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-fox-white sm:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-xs text-sm text-fox-gray sm:text-right">{description}</p>
      )}
    </div>
  );
}
