import { Link } from "@inertiajs/react";

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

export default function MemberCard({ member, index }) {
  const avatarClass = AVATAR_PALETTE[index % AVATAR_PALETTE.length];
  const tiltClass = index % 2 === 1 ? "tilt-r" : "";

  return (
    <Link href={`/team/${member.id}`} className="t10-member-link">
      <div className={`t10-member-card ${tiltClass}`}>
        <span className="t10-index-badge">No. 0{index + 1}</span>

        <div className={`t10-avatar ${avatarClass}`}>{initials(member.name)}</div>

        <h3 className="t10-member-name">{member.name}</h3>
        <div className="t10-member-role">{member.nrp}</div>
      </div>
    </Link>
  );
}
