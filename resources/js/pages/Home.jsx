import { Head, Link } from "@inertiajs/react";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/Components/Layout";

const VALUES = [
  {
    title: "Framework sebagai alat, bukan tujuan",
    text: "Dipilih sesuai kebutuhan proyek, lalu dipelajari bareng sampai semua orang pede pakainya.",
    rotate: "-2deg",
  },
  {
    title: "Peran jelas, obrolan tetap terbuka",
    text: "Semua punya tanggung jawab utama, tapi review kode dan ide desain selalu lintas peran.",
    rotate: "1.5deg",
  },
  {
    title: "Langkah kecil, evaluasi rutin",
    text: "Progres dipecah jadi sprint mingguan biar arah proyek nggak pernah kehilangan jalur.",
    rotate: "-1deg",
  },
];

export default function Home({ memberCount }) {
  // Scroll to #tentang if the page was loaded/navigated to with that hash
  // (e.g. clicking "Tentang" in the nav from another page).
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Layout>
      <Head title="Team 10 — PBKK" />

      <section className="t10-hero" id="beranda">
        <div
          className="t10-blob"
          style={{
            width: 420,
            height: 420,
            top: -140,
            right: -100,
            background: "radial-gradient(circle, rgba(232,84,60,0.28), transparent 70%)",
          }}
        />
        <div
          className="t10-blob"
          style={{
            width: 320,
            height: 320,
            bottom: -80,
            left: -80,
            background: "radial-gradient(circle, rgba(61,53,87,0.16), transparent 70%)",
          }}
        />

        <div className="t10-wrap">
          <span className="t10-eyebrow">
            <span className="dot" />
            Pemrograman Berbasis Kerangka Kerja
          </span>

          <h1 className="t10-headline">
            We're Team{" "}
            <span className="accented">
              10.
              <svg viewBox="0 0 120 20" preserveAspectRatio="none" fill="none">
                <path
                  d="M2 14 C 20 4, 40 18, 60 9 C 80 1, 100 15, 118 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="t10-hero-sub">
            Enam orang, satu kerangka kerja, dan satu semester untuk membangun
            sesuatu yang layak dipakai — bukan sekadar dikumpulkan.
          </p>

          <div className="t10-hero-cta">
            <Link href="/team" className="t10-btn t10-btn-primary">
              Kenalan sama tim <ArrowUpRight size={17} />
            </Link>
            <a href="#tentang" className="t10-btn t10-btn-ghost">
              Cara kami kerja
            </a>
          </div>

          <div className="t10-stats">
            <div className="t10-stat">
              <div className="num">{String(memberCount).padStart(2, "0")}</div>
              <div className="lbl">Anggota tim</div>
            </div>
            <div className="t10-stat">
              <div className="num">01</div>
              <div className="lbl">Proyek aktif</div>
            </div>
            <div className="t10-stat">
              <div className="num">25/26</div>
              <div className="lbl">Tahun ajaran</div>
            </div>
          </div>
        </div>
      </section>

      <section className="t10-section" id="tentang">
        <div className="t10-wrap">
          <div className="t10-section-head">
            <div>
              <span className="t10-tag">Tentang kami</span>
              <h2 className="t10-section-title">Cara kami bekerja.</h2>
            </div>
            <p className="t10-section-desc">
              Tim ini dibentuk untuk mata kuliah PBKK. Tiga hal ini yang
              memandu bagaimana kami membagi tugas dan mengambil keputusan
              sepanjang proyek berjalan.
            </p>
          </div>

          <div className="t10-values">
            {VALUES.map((v, i) => (
              <div key={i} className="t10-value-card" style={{ transform: `rotate(${v.rotate})` }}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
