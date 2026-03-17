import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiExternalLink,
  FiMail,
  FiMessageSquare
} from "react-icons/fi";
import { BackToTop } from "@/components/back-to-top";
import { SiteHeader } from "@/components/site-header";
import {
  aboutContent,
  contactForm,
  contactHighlights,
  footerText,
  heroContent,
  interests,
  projects,
  skills,
  socialLinks,
  testimonials,
  tools
} from "@/data/portfolio";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

type IconLinkProps = {
  href: string;
  label: string;
  Icon: IconType;
};

function SectionHeading({ kicker, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="max-w-2xl soft-text">{description}</p> : null}
    </div>
  );
}

function IconLink({ href, label, Icon }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="comic-icon-button"
    >
      <Icon />
    </a>
  );
}

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <main className="pb-10">
      <SiteHeader />

      <section id="hero" className="section-shell relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-x-0 top-10 -z-10 h-72 rounded-full bg-[color:var(--accent-cool)]/20 blur-3xl" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8" data-aos="fade">
            <span className="section-kicker">{heroContent.badge}</span>
            <div className="space-y-5">
              <p className="text-lg text-[color:var(--text-soft)] sm:text-xl">{heroContent.greeting}</p>
              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-[color:var(--text-main)] sm:text-6xl lg:text-7xl">
                <span className="gradient-text">{heroContent.name}</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--text-soft)] sm:text-lg">
                {heroContent.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="comic-button"
              >
                Contact Me
                <FiMail />
              </a>
              <a
                href="#projects"
                className="comic-button-outline"
              >
                View Portfolio
                <FiArrowRight />
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <IconLink key={item.label} href={item.href} label={item.label} Icon={item.icon} />
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md" data-aos="fade">
            <div className="glass-card relative overflow-hidden p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_38%),radial-gradient(circle_at_25%_20%,rgba(47,194,255,0.16),transparent_26%)]" />
              <div className="relative rounded-[24px] border-4 border-[color:var(--ink-strong)] bg-white/20 p-4">
                <div className="mb-4 flex items-center justify-between rounded-2xl border-4 border-[color:var(--ink-strong)] bg-[color:var(--card-alt)] px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[color:var(--text-soft)]">
                  <span>frontend-developer.tsx</span>
                  <span className="rounded-full bg-[color:var(--accent-main)] px-3 py-1 text-[color:var(--ink-strong)]">available</span>
                </div>
                <div className="relative overflow-hidden rounded-[28px] border-4 border-[color:var(--ink-strong)] bg-[linear-gradient(135deg,var(--accent-pop)_0%,var(--accent-alt)_38%,var(--accent-main)_72%,var(--accent-cool)_100%)] p-1">
                  <div className="rounded-[24px] bg-[color:var(--card-alt)] p-3">
                    <Image
                      src="/assets/images/portrait.png"
                      alt="Shubham Maurya portrait"
                      width={900}
                      height={1100}
                      className="h-auto w-full rounded-[20px] object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20" id="things-i-love">
        <SectionHeading
          kicker="Interests"
          title="Things I Love"
          description="The parts of creative work that keep me curious and energized."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3" data-aos="fade">
          {interests.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="glass-card p-8"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[color:var(--ink-strong)] bg-[linear-gradient(135deg,var(--accent-pop)_0%,var(--accent-main)_75%)] text-2xl text-[color:var(--ink-strong)] shadow-[4px_4px_0_var(--shadow-accent)]">
                  <Icon />
                </div>
                <h3 className="text-2xl font-black text-[color:var(--text-main)]">{item.title}</h3>
                <p className="mt-4 soft-text">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="section-shell py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]" data-aos="fade">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-40 w-40 rounded-[32px] border-4 border-[color:var(--accent-pop)]/70" />
            <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-[32px] border-4 border-[color:var(--accent-cool)]/70" />
            <div className="glass-card relative overflow-hidden p-4">
              <Image
                src="/assets/images/portrait-2.webp"
                alt="About Shubham Maurya"
                width={800}
                height={900}
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading
              kicker={aboutContent.eyebrow}
              title={aboutContent.title}
              description={aboutContent.intro}
            />
            <div className="space-y-5">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="soft-text">
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={aboutContent.cta.href}
              target="_blank"
              rel="noreferrer"
              className="comic-button-outline"
            >
              {aboutContent.cta.label}
              <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell py-16 sm:py-20">
        <SectionHeading
          kicker="What do I know?"
          title="Skills"
          description="Technologies that are part of my current stack and daily workflow."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-aos="fade">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card flex flex-col items-center gap-4 px-4 py-6 text-center"
            >
              <Image src={skill.image} alt={skill.name} width={72} height={72} className="h-[72px] w-[72px]" />
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--text-main)]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20" id="tools">
        <SectionHeading
          kicker="What I use"
          title="Tools"
          description="A few of the tools that support my design, coding, and shipping workflow."
          align="center"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-aos="fade">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="glass-card flex flex-col items-center gap-4 px-4 py-6 text-center"
            >
              <Image src={tool.image} alt={tool.name} width={72} height={72} className="h-[72px] w-[72px]" />
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--text-main)]">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell py-16 sm:py-20">
        <SectionHeading
          kicker="What I've done"
          title="Selected Projects"
          description="A few portfolio highlights that reflect client work, product thinking, and full-stack execution."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3" data-aos="fade">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="glass-card overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
              <div className="space-y-5 p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src={project.icon}
                    alt={`${project.name} icon`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-2xl border-4 border-[color:var(--ink-strong)] object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[color:var(--text-main)]">{project.name}</h3>
                    <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--accent-pop)]">{project.stack}</p>
                  </div>
                </div>
                <p className="soft-text">{project.description}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-[color:var(--text-main)] transition hover:text-[color:var(--accent-pop)]"
                >
                  Visit project
                  <FiExternalLink />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20" id="testimonials">
        <SectionHeading
          kicker="What they think"
          title="Testimonials"
          description="Feedback from collaborators, friends, and people who have worked with me."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2" data-aos="fade">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="glass-card p-8"
            >
              <p className="text-base leading-8 text-[color:var(--text-soft)]">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-full border-4 border-[color:var(--ink-strong)] object-cover"
                />
                <div>
                  <h3 className="text-lg font-black text-[color:var(--text-main)]">{testimonial.name}</h3>
                  <p className="text-sm text-[color:var(--text-soft)]">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]" data-aos="fade">
          <div className="space-y-6">
            <SectionHeading
              kicker="What's next"
              title="Get In Touch"
              description="Interested in working together? Let's talk about your next website, redesign, or product idea."
            />
            <div className="grid gap-4">
              {contactHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="glass-card flex items-start gap-4 p-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-[color:var(--ink-strong)] bg-[color:var(--accent-cool)] text-xl text-[color:var(--ink-strong)] shadow-[3px_3px_0_var(--shadow-accent)]">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[color:var(--text-main)]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-[color:var(--text-soft)]">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <form action={contactForm.action} method="POST" className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  className="comic-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="comic-input"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required
                className="comic-input"
              />
              <textarea
                name="message"
                placeholder="Your message *"
                rows={6}
                required
                className="comic-input"
              />
              <input type="hidden" name="_subject" value={contactForm.subject} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={`${siteUrl}/thankyou`} />
              <button
                type="submit"
                className="comic-button justify-center"
              >
                Send Message
                <FiMessageSquare />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="section-shell pt-10">
        <div className="border-t-4 border-[color:var(--ink-strong)] py-8 text-center text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--text-soft)]">
          {footerText}
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
