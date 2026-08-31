import { ImageIcon } from "lucide-react";

export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative z-[45] flex flex-col items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-brand-green-tint to-gray-100 ${className}`}
    >
      <ImageIcon className="h-8 w-8 text-brand-green/40" />
      {label && (
        <span className="text-xs text-brand-green/50">{label}</span>
      )}
    </div>
  );
}
