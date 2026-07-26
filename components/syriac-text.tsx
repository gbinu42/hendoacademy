import { cn } from "@/lib/utils";

type SyriacTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
  fontFamily?: string;
};

export function SyriacText({
  children,
  className,
  as: Tag = "span",
  fontFamily,
}: SyriacTextProps) {
  return (
    <Tag
      lang="syr"
      className={cn("syriac", className)}
      style={fontFamily ? { fontFamily } : undefined}
    >
      {children}
    </Tag>
  );
}
