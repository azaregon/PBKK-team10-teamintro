import NavBar from "./NavBar";
import Footer from "./Footer";

/**
 * Wrap every Page component with this. Fonts (Fraunces + Space Grotesk) and
 * the team10.css stylesheet are loaded globally — see resources/views/app.blade.php
 * and resources/js/app.jsx respectively, not here.
 */
export default function Layout({ children }) {
  return (
    <div className="t10-root">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
