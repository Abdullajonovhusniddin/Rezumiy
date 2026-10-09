import { useEffect } from 'react';

export default function ConfirmModal({ prompt, onClose }) {
  useEffect(() => {
    if (!prompt) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [prompt, onClose]);

  if (!prompt) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[#071016]/75 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-prompt-title"
        className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#19262c] p-6 shadow-[0_28px_100px_#0009] sm:p-7"
      >
        <div className="mb-5 grid size-12 place-items-center rounded-xl bg-cyan-300/10 text-lg font-bold text-cyan-200">
          {prompt.external ? 'TG' : '@'}
        </div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-cyan-200/65">{prompt.eyebrow}</p>
        <h2 id="contact-prompt-title" className="mb-2 font-serif text-2xl font-bold text-stone-100">
          {prompt.title}
        </h2>
        <p className="mb-6 text-sm leading-6 text-slate-300">{prompt.description}</p>

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5"
          >
            Bekor qilish
          </button>
          <a
            href={prompt.url}
            target={prompt.external ? '_blank' : undefined}
            rel={prompt.external ? 'noreferrer' : undefined}
            onClick={onClose}
            className="rounded-lg bg-cyan-300 px-4 py-2.5 text-center text-sm font-bold text-[#102127] transition hover:bg-cyan-200 hover:shadow-[0_5px_25px_#67d3dc33]"
          >
            {prompt.action}
          </a>
        </div>
      </section>
    </div>
  );
}
