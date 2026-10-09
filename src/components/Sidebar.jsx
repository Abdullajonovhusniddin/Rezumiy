import SectionTitle from './SectionTitle.jsx';
import SkillBar from './SkillBar.jsx';

const skills = [
  ['HTML5 / CSS3', 90],
  ['JavaScript', 76],
  ['React.js', 48],
  ['Tailwind CSS', 70],
  ['Git & GitHub', 62],
  ['API Integration', 43],
];

function ContactRow({ icon, children, href, onClick }) {
  const content = (
    <>
      <span aria-hidden="true" className="w-4 shrink-0 text-cyan-300/80">{icon}</span>
      <span className="break-all">{children}</span>
    </>
  );
  const className = 'flex min-w-0 items-start gap-2.5 text-[11px] leading-relaxed text-slate-300 transition hover:translate-x-1 hover:text-white';
  return href
    ? <a className={className} href={href}>{content}</a>
    : <button type="button" onClick={onClick} className={`${className} w-full cursor-pointer text-left`}>{content}</button>;
}

export default function Sidebar({ onContactClick }) {
  return (
    <aside className="bg-[#132838] px-5 py-6 sm:px-7 md:border-r md:border-white/5 md:px-7 md:py-10">
      <div className="hidden md:block">
        <div className="mb-5 grid size-[76px] place-items-center rounded-full border-2 border-cyan-300/70 bg-[#1c3c50] font-serif text-2xl font-bold text-cyan-100 shadow-[0_0_0_6px_#56b8c812] transition duration-300 hover:rotate-[-8deg] hover:scale-105 hover:shadow-[0_0_0_10px_#56b8c81c]">
          HA
        </div>
        <h1 className="font-serif text-[25px] font-bold leading-tight text-stone-100">
          Husniddin<br />Abdullajonov
        </h1>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-100/55">
          Frontend Developer
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2 md:block">
        <section className="mt-1 md:mt-9">
          <SectionTitle>Contact</SectionTitle>
          <div className="grid gap-3">
            <ContactRow icon="TEL" href="tel:+998337822200">+998 33 782 22 00</ContactRow>
            <ContactRow icon="@" onClick={() => onContactClick('email')}>
              husniddinabdullajonov5@gmail.com
            </ContactRow>
            <ContactRow icon="LOC">Tashkent, Uzbekistan</ContactRow>
            <ContactRow icon="TG" onClick={() => onContactClick('telegram')}>
              @husniddinabdullajonov5
            </ContactRow>
            <ContactRow icon="GH" href="https://github.com/Abdullajonovhusniddin">
              Abdullajonovhusniddin
            </ContactRow>
          </div>
        </section>

        <section className="mt-1 md:mt-9">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid gap-3.5">
            {skills.map(([name, level]) => <SkillBar key={name} name={name} level={level} />)}
          </div>
        </section>

        <section className="mt-1 sm:col-span-2 md:mt-9 md:col-span-1">
          <SectionTitle>Languages</SectionTitle>
          <div className="grid gap-2 text-[11px]">
            {[
              ['Uzbek', 'Native'],
              ['English', 'Basic'],
              ['Russian', 'Basic'],
            ].map(([language, level]) => (
              <p key={language} className="mb-0 flex justify-between text-slate-300">
                <span>{language}</span>
                <span className="text-cyan-100/50">{level}</span>
              </p>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
