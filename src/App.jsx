import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import ConfirmModal from './components/ConfirmModal.jsx';

const TELEGRAM_URL = 'https://t.me/husniddinabdullajonov5';
const EMAIL_ADDRESS = 'husniddinabdullajonov5@gmail.com';

const strengths = ['Fast learner', 'Teamwork', 'Problem solving', 'Responsibility', 'Time management'];
const contactPrompts = {
  telegram: {
    eyebrow: 'Telegram profile',
    title: 'Telegram’ga o‘tasizmi?',
    description: 'Telegram profilim yangi oynada ochiladi. Davom etishni xohlaysizmi?',
    action: 'Ha, Telegram’ni ochish',
    url: TELEGRAM_URL,
    external: true,
  },
  email: {
    eyebrow: 'Email',
    title: 'Email yozmoqchimisiz?',
    description: 'Email ilovangiz yangi xabar oynasini ochadi.',
    action: 'Ha, email yozish',
    url: `mailto:${EMAIL_ADDRESS}`,
    external: false,
  },
};

export default function App() {
  const [activePrompt, setActivePrompt] = useState(null);

  return (
    <>
      <main className="mx-auto min-h-screen max-w-6xl overflow-hidden bg-[#192329] shadow-[0_25px_100px_#0006] md:my-7 md:min-h-[calc(100vh-56px)] md:grid md:grid-cols-[290px_minmax(0,1fr)]">
        <Sidebar onContactClick={setActivePrompt} />
        <div className="px-5 py-7 sm:px-8 lg:px-12 lg:py-11">
          <header className="mb-8 flex items-center gap-4 md:hidden">
            <div className="grid size-14 shrink-0 place-items-center rounded-full border border-cyan-300/70 bg-[#1c3c50] font-serif text-xl font-bold text-cyan-100 shadow-[0_0_0_5px_#56b8c812]">HA</div>
            <div><h1 className="font-serif text-xl font-bold leading-tight text-stone-100">Husniddin Abdullajonov</h1><p className="mt-1 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-100/55">Frontend Developer</p></div>
          </header>

          <section className="mb-9">
            <SectionTitle>About Me</SectionTitle>
            <p className="max-w-3xl text-[13px] leading-7 text-slate-300">Motivated and passionate frontend developer currently studying Software Engineering. Focused on building modern, responsive, and user-friendly web applications. Quick learner with strong problem-solving skills.</p>
          </section>

          <section className="mb-9"><SectionTitle>Education</SectionTitle><Education /></section>
          <section className="mb-9"><SectionTitle>Projects</SectionTitle><Projects /></section>
          <section><SectionTitle>Strengths</SectionTitle><div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">{strengths.map((item) => <div key={item} className="border border-white/20 px-3 py-2 text-center text-[11px] text-slate-300 transition duration-200 hover:border-cyan-300/70 hover:bg-cyan-300/5 hover:text-cyan-100">{item}</div>)}</div></section>
        </div>
      </main>

      <ConfirmModal
        prompt={activePrompt ? contactPrompts[activePrompt] : null}
        onClose={() => setActivePrompt(null)}
      />
    </>
  );
}
