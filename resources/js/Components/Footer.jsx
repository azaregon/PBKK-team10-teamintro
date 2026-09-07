import { Link } from "@inertiajs/react";

export default function Footer() {
  return (
    <footer className="t10-footer">
      <div className="t10-wrap t10-foot-row">
        <Link href="/" className="t10-brand">
          <div className="t10-brand-mark">10</div>
          <div className="t10-brand-name">
            Team 10<span>/ PBKK</span>
          </div>
        </Link>
        <div className="t10-foot-meta">
          Pemrograman Berbasis Kerangka Kerja — Tahun Ajaran 2025/2026
        </div>
      </div>
    </footer>
  );
}
