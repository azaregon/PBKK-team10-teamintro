import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const MEMBERS = [
  { name: "Nama Anggota 1", role: "Project Lead", seed: "t10-a" },
  { name: "Nama Anggota 2", role: "Frontend Dev", seed: "t10-b" },
  { name: "Nama Anggota 3", role: "Backend Dev", seed: "t10-c" },
  { name: "Nama Anggota 4", role: "UI / UX Design", seed: "t10-d" },
  { name: "Nama Anggota 5", role: "Database Eng.", seed: "t10-e" },
  { name: "Nama Anggota 6", role: "QA & Testing", seed: "t10-f" },
];

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

export default function Team10Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Space+Grotesk:wght@400;500;600&display=swap",
      },
    ];
    const created = links.map((l) => {
      const el = document.createElement("link");
      Object.entries(l).forEach(([k, v]) => (el[k] = v));
      document.head.appendChild(el);
      return el;
    });
    return () => created.forEach((el) => el.remove());
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="t10-root">
      <style>{`
        .t10-root{
          --bg:#F7F1E6;
          --panel:#FFFDF8;
          --panel-2:#EFE6D3;
          --ink:#221F2B;
          --muted:#75705F;
          --coral:#E8543C;
          --mustard:#F0B429;
          --indigo:#3D3557;
          --hairline:rgba(34,31,43,0.14);
          background:var(--bg);
          color:var(--ink);
          font-family:'Space Grotesk', sans-serif;
          font-weight:400;
          line-height:1.6;
          min-height:100vh;
          position:relative;
          overflow-x:hidden;
        }
        .t10-root *{ box-sizing:border-box; }
        .t10-serif{ font-family:'Fraunces', serif; }
        .t10-wrap{ max-width:1180px; margin:0 auto; padding:0 24px; }
        @media(min-width:768px){ .t10-wrap{ padding:0 48px; } }

        /* ---------- header ---------- */
        .t10-header{
          position:sticky; top:0; z-index:50;
          padding:22px 0;
          transition:background .3s ease, padding .3s ease, box-shadow .3s ease;
        }
        .t10-header.scrolled{
          background:rgba(247,241,230,0.88);
          backdrop-filter:blur(10px);
          padding:14px 0;
          box-shadow:0 1px 0 var(--hairline);
        }
        .t10-nav-row{ display:flex; align-items:center; justify-content:space-between; }
        .t10-brand{ display:flex; align-items:center; gap:10px; }
        .t10-brand-mark{
          width:34px; height:34px; border-radius:999px;
          background:var(--coral);
          display:flex; align-items:center; justify-content:center;
          transform:rotate(-8deg);
          font-family:'Fraunces', serif; font-style:italic; font-weight:500;
          color:var(--panel); font-size:16px;
        }
        .t10-brand-name{ font-family:'Fraunces', serif; font-size:19px; font-weight:500; }
        .t10-brand-name span{ color:var(--muted); font-size:12.5px; font-family:'Space Grotesk',sans-serif; margin-left:6px; }
        .t10-nav-links{ display:none; align-items:center; gap:34px; list-style:none; }
        @media(min-width:768px){ .t10-nav-links{ display:flex; } }
        .t10-nav-links a{
          color:var(--ink); text-decoration:none; font-size:14.5px; font-weight:500;
          opacity:.8; position:relative; padding-bottom:3px;
        }
        .t10-nav-links a:hover{ opacity:1; }
        .t10-nav-links a::after{
          content:''; position:absolute; left:0; bottom:0; height:2px; width:0;
          background:var(--coral); border-radius:2px;
          transition:width .25s ease;
        }
        .t10-nav-links a:hover::after{ width:100%; }
        .t10-menu-btn{ display:flex; background:none; border:none; color:var(--ink); cursor:pointer; }
        @media(min-width:768px){ .t10-menu-btn{ display:none; } }
        .t10-mobile-menu{
          display:flex; flex-direction:column; gap:4px;
          background:var(--panel); border:1px solid var(--hairline); border-radius:16px;
          margin-top:14px; padding:10px; overflow:hidden;
        }
        .t10-mobile-menu a{
          padding:12px 14px; border-radius:10px; color:var(--ink); text-decoration:none;
          font-size:15px; font-weight:500;
        }
        .t10-mobile-menu a:hover{ background:var(--panel-2); }

        /* ---------- hero ---------- */
        .t10-hero{
          position:relative;
          padding:64px 0 90px;
        }
        .t10-blob{
          position:absolute; border-radius:50%; filter:blur(2px); z-index:0;
          opacity:0.55;
        }
        .t10-eyebrow{
          display:inline-flex; align-items:center; gap:8px;
          font-size:13px; font-weight:500; letter-spacing:0.02em;
          background:var(--panel); border:1px solid var(--hairline);
          padding:8px 16px 8px 14px; border-radius:999px;
          transform:rotate(-2deg);
          margin-bottom:34px;
        }
        .t10-eyebrow .dot{ width:7px; height:7px; border-radius:999px; background:var(--coral); }
        .t10-headline{
          position:relative; z-index:1;
          font-family:'Fraunces', serif;
          font-weight:500;
          font-size:clamp(44px, 8vw, 96px);
          line-height:1.02;
          letter-spacing:-0.01em;
          max-width:15ch;
        }
        .t10-headline .accented{ position:relative; display:inline-block; font-style:italic; color:var(--coral); }
        .t10-headline .accented svg{
          position:absolute; left:0; bottom:-0.14em; width:100%; height:0.3em;
        }
        .t10-hero-sub{
          position:relative; z-index:1;
          margin-top:30px; max-width:48ch;
          font-size:17.5px; color:var(--muted);
        }
        .t10-hero-cta{
          position:relative; z-index:1;
          margin-top:40px; display:flex; gap:16px; flex-wrap:wrap;
        }
        .t10-btn{
          display:inline-flex; align-items:center; gap:8px;
          font-family:'Space Grotesk', sans-serif; font-weight:600; font-size:15px;
          padding:14px 24px; border-radius:999px; cursor:pointer; border:none;
          text-decoration:none;
        }
        .t10-btn-primary{ background:var(--ink); color:var(--bg); }
        .t10-btn-primary:hover{ background:var(--coral); }
        .t10-btn-ghost{ background:transparent; color:var(--ink); border:1.5px solid var(--hairline); }
        .t10-btn-ghost:hover{ border-color:var(--ink); }

        .t10-stats{
          position:relative; z-index:1;
          margin-top:80px;
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:16px;
        }
        .t10-stat{
          background:var(--panel);
          border:1px solid var(--hairline);
          border-radius:20px;
          padding:22px 20px;
        }
        .t10-stat:nth-child(2){ transform:rotate(1deg); }
        .t10-stat:nth-child(3){ transform:rotate(-1deg); }
        .t10-stat .num{ font-family:'Fraunces', serif; font-size:30px; font-weight:500; color:var(--indigo); }
        .t10-stat .lbl{ margin-top:4px; font-size:12.5px; color:var(--muted); }

        /* ---------- about ---------- */
        .t10-section{ padding:100px 0; position:relative; }
        .t10-section-head{
          display:grid; grid-template-columns:1fr; gap:18px;
          margin-bottom:60px;
        }
        @media(min-width:768px){ .t10-section-head{ grid-template-columns:1fr 1.3fr; align-items:end; gap:50px; } }
        .t10-tag{
          display:inline-flex; align-items:center; gap:8px; width:fit-content;
          font-size:12.5px; font-weight:600; color:var(--indigo);
          background:var(--mustard); padding:6px 14px; border-radius:999px;
          transform:rotate(-2deg); margin-bottom:16px;
        }
        .t10-section-title{
          font-family:'Fraunces', serif; font-weight:500;
          font-size:clamp(30px, 4vw, 44px); line-height:1.1;
        }
        .t10-section-desc{ color:var(--muted); font-size:16px; max-width:50ch; }

        .t10-values{ display:grid; grid-template-columns:1fr; gap:24px; }
        @media(min-width:768px){ .t10-values{ grid-template-columns:repeat(3,1fr); } }
        .t10-value-card{
          background:var(--panel);
          border:1px solid var(--hairline);
          border-radius:22px;
          padding:32px 28px;
          transition:transform .25s ease, box-shadow .25s ease;
        }
        .t10-value-card:hover{
          transform:rotate(0deg) translateY(-4px) !important;
          box-shadow:0 14px 30px rgba(34,31,43,0.08);
        }
        .t10-value-card h3{ font-family:'Fraunces', serif; font-size:20px; font-weight:500; margin-bottom:12px; }
        .t10-value-card p{ color:var(--muted); font-size:14.5px; }

        /* ---------- team ---------- */
        .t10-team-grid{
          display:grid; grid-template-columns:1fr; gap:44px;
        }
        @media(min-width:640px){ .t10-team-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(min-width:1000px){ .t10-team-grid{ grid-template-columns:repeat(3,1fr); } }

        .t10-member{ position:relative; }
        .t10-member-photo{
          position:relative;
          aspect-ratio:4/5;
          border-radius:24px;
          overflow:hidden;
          background:var(--panel-2);
          transform:rotate(-1.4deg);
          transition:transform .35s ease;
        }
        .t10-member:nth-child(even) .t10-member-photo{ transform:rotate(1.4deg); }
        .t10-member:hover .t10-member-photo{ transform:rotate(0deg) scale(1.015); }
        .t10-member-photo img{
          width:100%; height:100%; object-fit:cover;
          filter:grayscale(0.85) sepia(0.12) contrast(1.02);
          transition:filter .5s ease;
        }
        .t10-member:hover .t10-member-photo img{ filter:grayscale(0) sepia(0) contrast(1); }
        .t10-member-badge{
          position:absolute; top:14px; left:14px;
          background:var(--panel); color:var(--ink);
          font-family:'Fraunces', serif; font-style:italic; font-weight:500;
          font-size:13.5px; padding:6px 12px; border-radius:999px;
          transform:rotate(-4deg);
          box-shadow:0 4px 10px rgba(34,31,43,0.12);
        }
        .t10-member-info{
          margin-top:18px; display:flex; align-items:flex-start; justify-content:space-between;
          padding-top:16px; border-top:1px dashed var(--hairline);
        }
        .t10-member-name{ font-family:'Fraunces', serif; font-weight:500; font-size:18.5px; }
        .t10-member-role{
          font-size:12px; font-weight:600; color:var(--coral);
          text-align:right; max-width:11ch; line-height:1.5;
          text-transform:uppercase; letter-spacing:0.02em;
        }

        /* ---------- footer ---------- */
        .t10-footer{
          border-top:1px solid var(--hairline);
          padding:48px 0;
        }
        .t10-foot-row{
          display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:16px;
        }
        .t10-foot-meta{ font-size:13px; color:var(--muted); }

        :focus-visible{ outline:2px solid var(--coral); outline-offset:3px; }
      `}</style>

      <header className={`t10-header ${scrolled ? "scrolled" : ""}`}>
        <div className="t10-wrap t10-nav-row">
          <div className="t10-brand">
            <div className="t10-brand-mark">10</div>
            <div className="t10-brand-name">
              Team 10<span>/ PBKK</span>
            </div>
          </div>

          <ul className="t10-nav-links">
            <li><a href="#beranda" onClick={scrollTo("beranda")}>Beranda</a></li>
            <li><a href="#tentang" onClick={scrollTo("tentang")}>Tentang</a></li>
            <li><a href="#anggota" onClick={scrollTo("anggota")}>Anggota</a></li>
          </ul>

          <button
            className="t10-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Buka menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="t10-wrap">
            <div className="t10-mobile-menu">
              <a href="#beranda" onClick={scrollTo("beranda")}>Beranda</a>
              <a href="#tentang" onClick={scrollTo("tentang")}>Tentang</a>
              <a href="#anggota" onClick={scrollTo("anggota")}>Anggota</a>
            </div>
          </div>
        )}
      </header>

      <section className="t10-hero" id="beranda">
        <div
          className="t10-blob"
          style={{
            width: 420, height: 420, top: -140, right: -100,
            background: "radial-gradient(circle, rgba(232,84,60,0.28), transparent 70%)",
          }}
        />
        <div
          className="t10-blob"
          style={{
            width: 320, height: 320, bottom: -80, left: -80,
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
            Enam orang, satu kerangka kerja, dan satu semester untuk membangun sesuatu yang layak dipakai — bukan sekadar dikumpulkan.
          </p>

          <div className="t10-hero-cta">
            <a href="#anggota" className="t10-btn t10-btn-primary" onClick={scrollTo("anggota")}>
              Kenalan sama tim <ArrowUpRight size={17} />
            </a>
            <a href="#tentang" className="t10-btn t10-btn-ghost" onClick={scrollTo("tentang")}>
              Cara kami kerja
            </a>
          </div>

          <div className="t10-stats">
            <div className="t10-stat">
              <div className="num">06</div>
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
              Tim ini dibentuk untuk mata kuliah PBKK. Tiga hal ini yang memandu bagaimana kami membagi tugas dan mengambil keputusan sepanjang proyek berjalan.
            </p>
          </div>

          <div className="t10-values">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="t10-value-card"
                style={{ transform: `rotate(${v.rotate})` }}
              >
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="t10-section" id="anggota" style={{ paddingTop: 0 }}>
        <div className="t10-wrap">
          <div className="t10-section-head">
            <div>
              <span className="t10-tag" style={{ background: "var(--indigo)", color: "var(--bg)" }}>
                Anggota tim
              </span>
              <h2 className="t10-section-title">Enam orang di baliknya.</h2>
            </div>
            <p className="t10-section-desc">
              Nama dan peran masih placeholder — ganti dengan anggota tim kamu yang sebenarnya.
            </p>
          </div>

          <div className="t10-team-grid">
            {MEMBERS.map((m, i) => (
              <div className="t10-member" key={m.seed}>
                <div className="t10-member-photo">
                  <img
                    src={`https://picsum.photos/seed/${m.seed}/480/600`}
                    alt={`Foto placeholder ${m.name}`}
                    loading="lazy"
                  />
                  <span className="t10-member-badge">No. 0{i + 1}</span>
                </div>
                <div className="t10-member-info">
                  <div className="t10-member-name">{m.name}</div>
                  <div className="t10-member-role">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="t10-footer">
        <div className="t10-wrap t10-foot-row">
          <div className="t10-brand">
            <div className="t10-brand-mark">10</div>
            <div className="t10-brand-name">
              Team 10<span>/ PBKK</span>
            </div>
          </div>
          <div className="t10-foot-meta">Pemrograman Berbasis Kerangka Kerja — Tahun Ajaran 2025/2026</div>
        </div>
      </footer>
    </div>
  );
}