import { type ReactNode } from 'react';
import { HiBookOpen, HiAcademicCap, HiCheckBadge } from 'react-icons/hi2';
import Button from './components/Button';

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <HiBookOpen className="text-5xl text-primary" />,
    title: 'Materi Interaktif',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
  },
  {
    icon: <HiAcademicCap className="text-5xl text-primary" />,
    title: 'Mentor Profesional',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
  },
  {
    icon: <HiCheckBadge className="text-5xl text-secondary" />,
    title: 'Sertifikat Resmi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* ========== HERO SECTION ========== */}
      <section className="bg-primary px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Belajar Tanpa Batas Bersama EduSmart
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          </p>
          <Button label="Mulai Belajar" variant="secondary" />
        </div>
      </section>

      {/* ========== CARD SECTION ========== */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Fitur Unggulan
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
            Semua yang kamu butuhkan untuk pengalaman belajar terbaik, tersedia di satu platform.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mb-6 text-gray-500">{feature.description}</p>
                <Button label="Pelajari" variant="primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Siap Memulai Perjalanan Belajarmu?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button label="Daftar Sekarang" variant="primary" />
            <Button label="Pelajari Lebih Lanjut" variant="secondary" />
          </div>
          <p className="mt-12 text-sm text-gray-500">
            EduSmart
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
