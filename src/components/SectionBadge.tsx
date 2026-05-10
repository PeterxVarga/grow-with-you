import { MagicSparkle } from "@/components/layout/ui/Decorations";

type SectionBadgeProps = {
  children: React.ReactNode;
};

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-badge bg-white/70 backdrop-blur-sm">
      <div
        style={{ filter: "drop-shadow(0px 3.52px 7.04px rgba(222, 160, 157, 0.8))" }}
        className="flex items-center justify-center"
      >
        <MagicSparkle className="w-[18px] h-[18px] overflow-visible" />
      </div>
      <span className="font-caveat text-base tracking-[-0.32px] leading-6 text-text-main/80 uppercase">
        {children}
      </span>
    </div>
  );
}
