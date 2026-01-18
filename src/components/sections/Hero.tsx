import Link from "next/link";

const placeholderSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1F3B"/>
      <stop offset="0.6" stop-color="#0F172A"/>
      <stop offset="1" stop-color="#020617"/>
    </linearGradient>

    <!-- BLUE glow (replaces the red) -->
    <radialGradient id="r1" cx="25%" cy="10%" r="60%">
      <stop offset="0" stop-color="#2563EB" stop-opacity="0.42"/>
      <stop offset="1" stop-color="#2563EB" stop-opacity="0"/>
    </radialGradient>

    <radialGradient id="r2" cx="80%" cy="20%" r="55%">
      <stop offset="0" stop-color="#60A5FA" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#60A5FA" stop-opacity="0"/>
    </radialGradient>

    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.08 0"/>
    </filter>
  </defs>

  <rect width="1600" height="900" fill="url(#g1)"/>
  <rect width="1600" height="900" fill="url(#r1)"/>
  <rect width="1600" height="900" fill="url(#r2)"/>

  <!-- subtle “group photo vibe” silhouettes -->
  <g opacity="0.22" fill="#0B1220">
    <circle cx="240" cy="690" r="80"/>
    <circle cx="360" cy="690" r="90"/>
    <circle cx="510" cy="690" r="85"/>
    <circle cx="660" cy="690" r="95"/>
    <circle cx="820" cy="690" r="88"/>
    <circle cx="980" cy="690" r="92"/>
    <circle cx="1140" cy="690" r="84"/>
    <circle cx="1290" cy="690" r="96"/>
    <rect x="120" y="740" width="1380" height="220" rx="90"/>
  </g>

  <rect width="1600" height="900" filter="url(#noise)"/>
</svg>
`;

const bgDataUri = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  placeholderSvg
)}`;

export default function Hero() {
  return (
    // Pull the hero behind the fixed header so the transparent header
    // sits on top of the hero (not on top of the white page background).
    <section className="relative -mt-16 pt-16 min-h-[calc(82vh+4rem)] flex items-center overflow-hidden">
      {/* Background image placeholder + dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(2,6,23,0.55), rgba(2,6,23,0.78)),
            url("${bgDataUri}")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      {/* subtle top highlight (BLUE now) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(37,99,235,0.18), transparent 45%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <p className="text-white/80 text-sm tracking-wide">
            Islamic University of Technology (IUT)
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            ASME IUT Student Section
          </h1>

          <p className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/announcements"
              className="inline-flex justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
            >
              Announcements
            </Link>

            <Link
              href="/contact"
              className="inline-flex justify-center rounded-2xl bg-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/25 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* quick stats (optional but classy) */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { k: "Members", v: "—" },
              { k: "Events", v: "—" },
              { k: "Achievements", v: "—" },
              { k: "Since", v: "—" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3"
              >
                <div className="text-lg font-semibold text-white">{s.v}</div>
                <div className="text-xs text-white/75">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,6,23,0), rgba(248,250,252,1))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
