const projects = [
  {
    title: 'Todo App',
    text: 'A simple task manager built with JavaScript as a learning project.',
    tag: 'JavaScript',
  },
  {
    title: 'Landing Page',
    text: 'A responsive landing page made with HTML and CSS.',
    tag: 'HTML · CSS',
  },
  {
    title: 'Portfolio Website',
    text: 'My personal portfolio. I’m adding new projects and improving it over time.',
    tag: 'In progress',
  },
];

export default function Projects() {
  return (
    <div className="grid gap-3">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-white/[.08] bg-[#151e22] px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-[#1b292e] hover:shadow-[0_12px_30px_#0003] sm:px-5"
        >
          <span className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 bg-cyan-300 transition-transform duration-300 group-hover:scale-y-100" />
          <span className="mr-1 hidden font-mono text-xs text-cyan-100/25 transition-colors group-hover:text-cyan-100/70 sm:block">0{index + 1}</span>
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-[13px] font-semibold text-stone-100 transition-colors group-hover:text-cyan-100">{project.title}</h3>
            <p className="mb-0 text-[11px] leading-relaxed text-slate-400">{project.text}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1 text-[9px] font-medium text-slate-300 transition duration-300 group-hover:border-cyan-200/20 group-hover:bg-cyan-200/10 group-hover:text-cyan-100">{project.tag}</span>
            <span aria-hidden="true" className="text-sm text-cyan-200/40 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-100">↗</span>
          </div>
        </article>
      ))}
    </div>
  );
}
