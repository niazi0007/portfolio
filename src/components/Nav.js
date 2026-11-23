import Link from "next/link";
import { profile, SHOW_STORE_IN_MENU } from "@/data/site";

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="brand"><i />{profile.short}</Link>
      <div className="navlinks">
        <a href="/#projects">01 PROJECTS</a>
        <a href="/#experience">02 EXPERIENCE</a>
        <a href="/#certifications">03 CERTS</a>
        <a href="/#contact">04 CONTACT</a>
        {SHOW_STORE_IN_MENU && <Link href="/store" className="store">STORE →</Link>}
      </div>
      <span className="online">ONLINE</span>
    </nav>
  );
}
