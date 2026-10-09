export default function SectionTitle({ children }) {
  return (
    <h2 className="relative mb-5 pb-3 text-[10px] font-bold uppercase tracking-[.24em] text-cyan-200/80 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-cyan-300/70 after:via-white/10 after:to-transparent">
      {children}
    </h2>
  );
}
