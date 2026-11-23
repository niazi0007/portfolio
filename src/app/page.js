import Nav from "@/components/Nav";
import Rack from "@/components/Rack";
import Photo from "@/components/Photo";
import Fade from "@/components/Fade";
import Carousel from "@/components/Carousel";
import {
  profile, contact, statusLines, numbers, projects, experience, certifications, skills,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <Nav />

      <header className="hero">
        <div className="meta">UPTIME 99.9% <span>/</span> REGION ISB-PK<br /><span>LAT 33.68 · LON 73.04</span><br />BUILD · PASSED</div>
        <div className="hero-grid">
          <div>
            {profile.photo && <Photo src={profile.photo} alt={profile.name} />}
            <h1>{profile.headlineTop}<b className="typed">{profile.headlineBottom}</b></h1>
            <p className="lead">{profile.intro}</p>
            <div className="cta">
              <a className="btn primary" href={profile.cv} download>DOWNLOAD CV ↓</a>
              <a className="btn" href="#contact">CONTACT →</a>
            </div>
          </div>
          <div className="rackwrap">
            <Rack />
            <div className="status">
              {statusLines.map(([a, b, c]) => <div key={a}>{a} · {b} <b>{c}</b></div>)}
            </div>
          </div>
        </div>
        <div className="redline" />
        <div className="nums">
          {[["01", "PROJECTS", "#projects"], ["02", "EXPERIENCE", "#experience"], ["03", "CERTIFICATIONS", "#certifications"], ["04", "CONTACT", "#contact"]].map(
            ([n, l, h]) => <a key={n} href={h}><div>{n}</div><small>{l}</small></a>
          )}
        </div>
      </header>

      <section className="sec">
        <Fade className="stats">
          {numbers.map(([n, l]) => <div className="stat" key={l}><b>{n}</b><small>{l}</small></div>)}
        </Fade>
      </section>

      <section className="sec projects" id="projects">
        <Fade><div className="kicker">01 / PROJECTS</div><h2>THINGS I HAVE BUILT</h2></Fade>
        <Carousel projects={projects} />
      </section>

      <section className="sec" id="experience">
        <Fade><div className="kicker">02 / EXPERIENCE</div><h2>WHERE I HAVE WORKED</h2></Fade>
        <div className="timeline">
          {experience.map((e) => (
            <Fade className="titem" key={e.org + e.when}>
              <div className="when">{e.when}</div>
              <h3>{e.role}</h3>
              <div className="org">{e.org}</div>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </Fade>
          ))}
        </div>
      </section>

      <section className="sec" id="certifications">
        <Fade><div className="kicker">03 / CERTIFICATIONS</div><h2>VERIFIED SKILLS</h2></Fade>
        <Fade className="certs">
          {certifications.map((c) => (
            <div className="cert" key={c.code}>
              <div className="code">{c.code}</div>
              <h3>{c.name}</h3>
              <small>{c.by}</small>
              <small>{c.id === "In progress" ? "IN PROGRESS" : `ID: ${c.id}`}</small>
            </div>
          ))}
        </Fade>
        <Fade className="skills" style={{ marginTop: 70 }}>
          {Object.entries(skills).map(([group, list]) => (
            <div key={group}>
              <h4>{group.toUpperCase()}</h4>
              {list.map((s) => <span className="chip" key={s}>{s}</span>)}
            </div>
          ))}
        </Fade>
      </section>

      <section className="sec" id="contact">
        <Fade><div className="kicker">04 / CONTACT</div><h2>LET&apos;S WORK TOGETHER</h2></Fade>
        <Fade className="contact-grid">
          <a className="clink" href={`mailto:${contact.email}`}><b>EMAIL ↗</b>{contact.email}</a>
          <a className="clink" href={contact.linkedin} target="_blank" rel="noreferrer"><b>LINKEDIN ↗</b>Connect with me</a>
          <a className="clink" href={contact.github} target="_blank" rel="noreferrer"><b>GITHUB ↗</b>See my code</a>
          <a className="clink" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><b>WHATSAPP ↗</b>Message me</a>
        </Fade>
      </section>

      <footer className="foot">
        <span>{profile.location}</span>
        <span>BUILT WITH NEXT.JS · DOCKER · DEPLOYED BY CI/CD</span>
        <span>© {new Date().getFullYear()} {profile.short}</span>
      </footer>
    </>
  );
}
