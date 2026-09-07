import { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const { url } = usePage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) =>
    path === "/" ? url === "/" : url.startsWith(path);

  return (
    <header className={`t10-header ${scrolled ? "scrolled" : ""}`}>
      <div className="t10-wrap t10-nav-row">
        <Link href="/" className="t10-brand">
          <div className="t10-brand-mark">10</div>
          <div className="t10-brand-name">
            Team 10<span>/ PBKK</span>
          </div>
        </Link>

        <ul className="t10-nav-links">
          <li>
            <Link href="/" className={isActive("/") ? "active" : ""}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/#tentang">Tentang</Link>
          </li>
          <li>
            <Link href="/team" className={isActive("/team") ? "active" : ""}>
              Anggota
            </Link>
          </li>
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
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Beranda
            </Link>
            <Link href="/#tentang" onClick={() => setMenuOpen(false)}>
              Tentang
            </Link>
            <Link href="/team" onClick={() => setMenuOpen(false)}>
              Anggota
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
