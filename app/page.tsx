export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 py-14">
        {/* Header */}
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">김보성</h1>
          <p className="text-lg text-zinc-600">
            Mechanical Engineering & Physics | Research / Robotics / EdTech
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="underline underline-offset-4" href="mailto:your@email.com">
              your@email.com
            </a>
            <a className="underline underline-offset-4" href="https://github.com/yourname" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="underline underline-offset-4" href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </header>

        {/* About */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-3 leading-7 text-zinc-700">
            여기에 4~6줄 소개를 적으면 돼. (전공, 관심 분야, 하고 싶은 연구/개발, 강점)
          </p>
        </section>

        {/* Experience */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">UROP Intern · 에너지환경유동연구실</p>
                <p className="text-sm text-zinc-500">2025.07 – 2025.11</p>
              </div>
              <ul className="mt-2 list-disc pl-5 text-zinc-700">
                <li>MRV/PIV 데이터 분석, 유동 특성 지표 설계</li>
                <li>실험/코드 파이프라인 정리 및 결과 시각화</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <a className="rounded-xl border p-4 hover:bg-zinc-50" href="#">
              <p className="font-medium">Running Journal App</p>
              <p className="mt-1 text-sm text-zinc-600">
                Flutter 기반 러닝 다이어리 앱. 기록/편집/일지 기능.
              </p>
              <p className="mt-3 text-xs text-zinc-500">Flutter · Supabase</p>
            </a>

            <a className="rounded-xl border p-4 hover:bg-zinc-50" href="#">
              <p className="font-medium">ESP32-CAM Line Tracer</p>
              <p className="mt-1 text-sm text-zinc-600">
                OpenCV 기반 라인 추적 + 제어 신호 전송.
              </p>
              <p className="mt-3 text-xs text-zinc-500">ESP32 · OpenCV · Python</p>
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Python", "MATLAB", "Arduino", "C/C++", "Flutter", "Git"].map((s) => (
              <span key={s} className="rounded-full border px-3 py-1 text-sm text-zinc-700">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} 김보성 · Built with Next.js
        </footer>
      </div>
    </main>
  );
}
