import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, Mail } from "lucide-react";
import Layout from "@/Components/Layout";

const AVATAR_PALETTE = ["t10-avatar-coral", "t10-avatar-mustard", "t10-avatar-indigo"];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function TeamShow({ member }) {
  const avatarClass = AVATAR_PALETTE[(member.id - 1) % AVATAR_PALETTE.length];

  return (
    <Layout>
      <Head title={`${member.name} — Team 10 PBKK`} />

      <section className="t10-section" style={{ paddingTop: 64 }}>
        <div className="t10-wrap">
          <Link href="/team" className="t10-back-link">
            <ArrowLeft size={16} /> Kembali ke tim
          </Link>

          <div className="t10-detail-head">
            <div className={`t10-avatar lg ${avatarClass}`}>{initials(member.name)}</div>
            <div>
              <h1 className="t10-detail-name">{member.name}</h1>
              <span className="t10-tag" style={{ margin: 0 }}>
                NRP {member.nrp}
              </span>
            </div>
          </div>

          <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 18, marginBottom: 14 }}>
            Kontak
          </h3>
          <div className="t10-contact-row">
            {member.contact?.email && (
              <a className="t10-contact-pill" href={`mailto:${member.contact.email}`}>
                <Mail size={16} /> {member.contact.email}
              </a>
            )}
            {member.contact?.github && (
              <a
                className="t10-contact-pill"
                href={member.contact.github}
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-6 h-6" src="https://raw.githubusercontent.com/gilbarbara/logos/a5b65275e761a8347a99eded1101c6b130a06e52/logos/github-icon.svg" alt="" />
              
              </a>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
