import Image from "next/image";

const logoAsset = "/assets/gdg-logo.svg";
const markAsset = "/assets/gdg-mark.svg";

const navItems = ["About", "Team", "Departments", "Events"];

const heroStats = [
  { value: "12", label: "departments", tone: "blue" },
  { value: "17", label: "student leads", tone: "red" },
  { value: "400+", label: "members", tone: "yellow" },
  { value: "12+", label: "events a year", tone: "green" },
] as const;

const marqueeItems = [
  { label: "BUILD", icon: "/assets/icon-vector-1.svg", color: "#8ab4f8" },
  { label: "SHIP", icon: "/assets/icon-vector-7.svg", color: "#ff7a6b" },
  { label: "LEARN", icon: "/assets/icon-vector-6.svg", color: "#ffd45e" },
  { label: "HACK", icon: "/assets/icon-vector-5.svg", color: "#6ee7a0" },
  { label: "REPEAT", icon: "/assets/icon-vector-1.svg", color: "#8ab4f8" },
];

const aboutPrinciples = [
  {
    icon: "/assets/icon-vector-2.svg",
    title: "learn by doing",
    description: "every session ends with something you actually built.",
    color: "#8ab4f8",
  },
  {
    icon: "/assets/icon-vector-3.svg",
    title: "beginner friendly",
    description: "peers and mentors who still remember day one.",
    color: "#ff7a6b",
  },
  {
    icon: "/assets/icon-vector-4.svg",
    title: "globally connected",
    description: "part of GDG on Campus chapters worldwide.",
    color: "#6ee7a0",
  },
] as const;

const advisoryBoard = [
  { name: "Name", role: "Faculty Advisor", tone: "red" },
  { name: "Name", role: "Faculty Advisor", tone: "green" },
] as const;

const coreBoard = [
  { name: "Name", role: "Chapter Lead", tone: "blue" },
  { name: "Name", role: "Co-Lead", tone: "red" },
  { name: "Name", role: "Technical Head", tone: "green" },
  { name: "Name", role: "Product Head", tone: "yellow" },
  { name: "Name", role: "Operations Head", tone: "blue" },
] as const;

const departments = [
  {
    icon: "/assets/icon-vector-2.svg",
    tone: "#8ab4f8",
    name: "Management",
    description: "Operations, logistics and the people who make events happen.",
  },
  {
    icon: "/assets/icon-vector-7.svg",
    tone: "#ff7a6b",
    name: "Web Dev",
    description: "Modern frontends, full-stack apps and the open web.",
  },
  {
    icon: "/assets/icon-vector-3.svg",
    tone: "#ffd45e",
    name: "UI / UX",
    description: "Research, wireframes and interfaces people love to use.",
  },
  {
    icon: "/assets/icon-vector-4.svg",
    tone: "#6ee7a0",
    name: "Design",
    description: "Branding, posters and the visual identity of GDG VITC.",
  },
  {
    icon: "/assets/icon-vector-5.svg",
    tone: "#8ab4f8",
    name: "App Dev",
    description: "Android and cross-platform apps with Kotlin and Flutter.",
  },
  {
    icon: "/assets/icon-vector-6.svg",
    tone: "#ff7a6b",
    name: "Game Dev",
    description: "Building games with Unity, Godot and the web.",
  },
  {
    icon: "/assets/icon-vector-1.svg",
    tone: "#ffd45e",
    name: "Competitive Programming",
    description: "DSA, contests and cracking that dream internship.",
  },
  {
    icon: "/assets/icon-vector-7.svg",
    tone: "#6ee7a0",
    name: "PR & Outreach",
    description: "Stories, partnerships and taking the community further.",
  },
  {
    icon: "/assets/icon-vector-2.svg",
    tone: "#8ab4f8",
    name: "Cloud",
    description: "Deployment, infrastructure and practical platform skills.",
  },
  {
    icon: "/assets/icon-vector-3.svg",
    tone: "#ff7a6b",
    name: "AI / ML",
    description: "Models, experiments and useful ways to ship with AI.",
  },
  {
    icon: "/assets/icon-vector-4.svg",
    tone: "#ffd45e",
    name: "Content",
    description:
      "Writing, motion and making the work look as good as it feels.",
  },
  {
    icon: "/assets/icon-vector-5.svg",
    tone: "#6ee7a0",
    name: "Open Source",
    description: "Contributions, maintainer habits and real collaboration.",
  },
] as const;

const events = [
  {
    month: "AUG",
    date: "12",
    name: "Build with Gemini",
    description: "Hands-on workshop",
    time: "10:00 AM",
  },
  {
    month: "SEP",
    date: "04",
    name: "Web Dev Jam",
    description: "Bring an idea, leave with a prototype",
    time: "2:00 PM",
  },
  {
    month: "OCT",
    date: "18",
    name: "DevFest VITC",
    description: "Our flagship community event",
    time: "9:00 AM",
  },
  {
    month: "NOV",
    date: "09",
    name: "Open Source Night",
    description: "Ship something that matters",
    time: "5:30 PM",
  },
] as const;

const footerLinks = [
  "About the chapter",
  "The people",
  "Departments",
  "Upcoming events",
] as const;

function MaskIcon({
  src,
  color,
  size = 24,
  className = "",
}: {
  src: string;
  color: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`mask-icon ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
      }}
    />
  );
}

function SectionLabel({
  children,
  tone = "yellow",
}: {
  children: string;
  tone?: "yellow" | "green";
}) {
  return <p className={`section-label section-label-${tone}`}>{children}</p>;
}

function TeamAvatar({
  tone,
  size = "large",
}: {
  tone: "blue" | "red" | "green" | "yellow";
  size?: "large" | "medium" | "small";
}) {
  return (
    <div className={`team-avatar team-avatar-${tone} team-avatar-${size}`}>
      <div className="team-avatar-inner">
        <MaskIcon
          src="/assets/icon-vector-4.svg"
          color="rgba(27, 27, 27, 0.55)"
          size={size === "large" ? 28 : size === "medium" ? 24 : 22}
        />
        <span>Photo</span>
      </div>
    </div>
  );
}

function Marquee() {
  return (
    <div className="marquee" aria-label="Build, ship, learn, hack, repeat">
      <div className="marquee-track">
        {[0, 1, 2].map((copy) => (
          <div className="marquee-copy" key={copy} aria-hidden={copy > 0}>
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={item.label}>
                {item.label}
                <MaskIcon
                  src={item.icon}
                  color={item.color}
                  size={18}
                  className="marquee-icon"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="content-section about" id="about">
      <div className="about-grid">
        <div>
          <SectionLabel>// ABOUT THE CHAPTER</SectionLabel>
          <h2>a home for builders on campus.</h2>
          <div className="section-wave wave-red" />
          <p className="body-copy">
            GDG on Campus · VIT Chennai is a student-led community backed by
            Google Developers. We run hands-on workshops, hackathons, and
            speaker sessions, no experience required, just curiosity and a
            slightly reckless will to build.
          </p>
        </div>

        <div className="principles">
          {aboutPrinciples.map((principle) => (
            <div key={principle.title}>
              <MaskIcon
                src={principle.icon}
                color={principle.color}
                size={30}
              />
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="content-section team" id="team">
      <SectionLabel tone="yellow">// THE PEOPLE</SectionLabel>
      <h2>the crew behind it all.</h2>
      <p className="body-copy intro-copy">
        From the campus organiser to project heads and faculty mentors, the
        people who keep the community moving.
      </p>
      <div className="team-group team-group-top">
        <div className="team-top-grid">
          <div className="team-column team-column-organiser">
            <h3 className="group-title">CAMPUS ORGANISER</h3>
            <div className="team-person team-person-organiser">
              <TeamAvatar tone="blue" size="large" />
              <div className="team-person-copy">
                <strong>Name</strong>
                <small className="tone-blue">Campus Organiser</small>
              </div>
            </div>
          </div>

          <div className="team-divider" aria-hidden />

          <div className="team-column team-column-advisors">
            <h3 className="group-title">ADVISORY BOARD · FACULTY</h3>
            <div className="team-advisors-list">
              {advisoryBoard.map((member) => (
                <div
                  className="team-person team-person-advisor"
                  key={member.role + member.tone}
                >
                  <TeamAvatar tone={member.tone} size="medium" />
                  <div className="team-person-copy">
                    <strong>{member.name}</strong>
                    <small className={`tone-${member.tone}`}>
                      {member.role}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="team-group">
        <h3 className="group-title group-title-core">
          CORE BOARD &amp; PROJECT HEADS
        </h3>
        <div className="team-core-grid">
          {coreBoard.map((member) => (
            <div className="person-card person-card-core" key={member.role}>
              <TeamAvatar tone={member.tone} size="small" />
              <strong>{member.name}</strong>
              <small className={`tone-${member.tone}`}>{member.role}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Departments() {
  return (
    <section className="departments" id="departments">
      <div className="content-section departments-inner">
        <SectionLabel tone="green">// WHERE THE WORK HAPPENS</SectionLabel>
        <h2>twelve departments.</h2>
        <p className="body-copy intro-copy">
          Every department runs its own workshops, projects and is led by
          students, open to all.
        </p>
        <div className="department-list">
          {departments.map((department, index) => (
            <div className="department-row" key={`${department.name}-${index}`}>
              <MaskIcon
                src={department.icon}
                color={department.tone}
                size={28}
                className="department-icon"
              />
              <div>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
              </div>
              <div className="lead-avatar">Lead</div>
              <span className="lead-name">
                Name
                <br />
                <small>Lead</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="content-section events" id="events">
      <div className="events-heading">
        <div>
          <SectionLabel tone="yellow">// WHAT&apos;S ON</SectionLabel>
          <h2>upcoming events.</h2>
        </div>
        <a href="#events">
          Schedule <span>→</span>
        </a>
      </div>
      <div className="event-list">
        {events.map((event) => (
          <div className="event-row" key={event.name}>
            <div className="event-date">
              <small>{event.month}</small>
              <strong>{event.date}</strong>
            </div>
            <div className="event-main">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
            </div>
            <span className="event-time">{event.time}</span>
            <span className="event-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function LookingBack() {
  return (
    <section className="content-section looking-back">
      <div className="look-copy">
        <SectionLabel tone="green">// LOOKING BACK</SectionLabel>
        <h2>Devshouse&apos;26, and everything after.</h2>
        <p className="body-copy">
          Our flagship day brought together 500+ students, 12 speakers and a
          room that stayed full till midnight, one of many moments from a year
          of building together.
        </p>
        <div className="look-stats">
          <span>
            <strong>500+</strong>
            <small>Attendees</small>
          </span>
          <span>
            <strong>30</strong>
            <small>Hackathon teams</small>
          </span>
          <span>
            <strong>12</strong>
            <small>Speakers</small>
          </span>
        </div>
      </div>
      <div className="photo-placeholder">
        <MaskIcon
          src={markAsset}
          color="#ffd45e"
          size={40}
          className="photo-mark"
        />
        <p>DevFest / event photo</p>
      </div>
    </section>
  );
}

function JoinSection() {
  return (
    <section className="join-section" id="join">
      <div className="join-dots">
        <i />
        <i />
        <i />
        <i />
      </div>
      <h2>ready to build with us?</h2>
      <p>
        Membership open to every VIT Chennai student.
        <br />
        Join, show up, and start shipping things.
      </p>
      <div className="join-actions">
        <a className="button button-primary" href="#join">
          <span aria-hidden>＋</span> Become a member
        </a>
        <a className="button button-outline" href="#events">
          Join our next event
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <a className="brand" href="#top">
            <Image
              src={logoAsset}
              alt="GDG on Campus · VIT Chennai"
              width={184}
              height={24}
              priority
            />
            <span>GDG on Campus · VIT Chennai</span>
          </a>
          <p>
            A student developer community at Vellore Institute of Technology,
            Chennai - learning and building with Google technologies.
          </p>
          <div className="socials">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/social-instagram.svg"
                alt=""
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/social-linkedin.svg"
                alt=""
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://x.com/"
              aria-label="X"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/assets/social-x.svg" alt="" width={22} height={22} />
            </a>
            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/assets/social-youtube.svg"
                alt=""
                width={22}
                height={22}
              />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          {footerLinks.map((link, index) => (
            <a href={`#${navItems[index].toLowerCase()}`} key={link}>
              {link}
            </a>
          ))}
        </div>

        <div>
          <h4>Get in touch</h4>
          <a href="mailto:gdg.vitchennai@gmail.com">gdg.vitchennai@gmail.com</a>
          <span>VIT Chennai, Kelambakkam</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 GDG on Campus · VIT Chennai.</span>
        <span>design by ui/ux dept. and developed by web dev dept.</span>
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top">
          <Image
            src={logoAsset}
            alt="GDG on Campus · VIT Chennai"
            width={184}
            height={24}
            priority
          />
          <span>GDG VIT Chennai</span>
        </a>

        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <a className="button button-join" href="#join">
          <span aria-hidden>⚡</span> Join us
        </a>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-red" />
        <div className="hero-glow hero-glow-green" />
        <div className="hero-blob" />
        <MaskIcon
          src="/assets/sparkle-star.svg"
          color="#ffd45e"
          size={26}
          className="hero-spark hero-spark-yellow"
        />
        <MaskIcon
          src="/assets/sparkle-bolt.svg"
          color="#8ab4f8"
          size={22}
          className="hero-spark hero-spark-blue"
        />
        <MaskIcon
          src="/assets/sparkle-star.svg"
          color="#ff7a6b"
          size={24}
          className="hero-spark hero-spark-red"
        />

        <div className="hero-sticker hero-sticker-left">
          beginner friendly ✳
        </div>
        <div className="hero-sticker hero-sticker-right">12 departments</div>

        <div className="hero-inner">
          <p className="eyebrow">
            <i /> Student dev community · backed by Google Developers
          </p>

          <h1 id="hero-title">
            <span>we build </span>
            <span className="headline-blue">weird</span>
            <span>,</span>
            <br />
            <span>wonderful </span>
            <span className="headline-red">things</span>
            <br />
            <span className="together">together</span>
          </h1>

          <p className="hero-copy">
            The home for builders at <strong>VIT Chennai,</strong> twelve
            departments, dozens of student leads, and a year of workshops,
            hackathons and gloriously over-ambitious side projects.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#join">
              <span aria-hidden>↗</span> Become a GDG Member
            </a>
            <a className="button button-outline" href="#departments">
              Explore departments
            </a>
          </div>

          <div className="stats" aria-label="Community stats">
            {heroStats.map((stat) => (
              <div className={`stat stat-${stat.tone}`} key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
      <About />
      <Team />
      <Departments />
      <Events />
      <LookingBack />
      <JoinSection />
      <Footer />
    </main>
  );
}
