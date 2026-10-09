const items = [
  { period: '2025 — Present', title: 'Software Engineering', detail: 'College Student' },
  { period: '2025 — Present', title: 'Frontend Development', detail: 'Online Course' },
];

export default function Education() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="min-h-24 border border-white/5 border-l-[3px] border-l-cyan-400/70 bg-[#151e22] p-4 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#1c2c31]"
        >
          <span className="text-[10px] text-slate-400">{item.period}</span>
          <h3 className="mb-1 mt-1 text-[13px] font-semibold text-stone-100">{item.title}</h3>
          <p className="mb-0 text-[11px] text-slate-400">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
