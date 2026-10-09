export default function SkillBar({ name, level }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex justify-between text-[11px] text-slate-300">
        <span>{name}</span>
        <span className="text-[9px] text-cyan-100/45 opacity-0 transition group-hover:opacity-100">
          {level}%
        </span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <span
          className="block h-full rounded-full bg-cyan-300/75 transition-all duration-500 group-hover:brightness-125"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
