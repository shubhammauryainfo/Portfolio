"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FiLock } from "react-icons/fi";
import { FinalReveal } from "./final-reveal";
import { AdaptiveGallery } from "./adaptive-gallery";
import type { MemoryPhoto } from "./types";
import styles from "./rakhi.module.css";

type KomalPageExperienceProps = {
  memories: MemoryPhoto[];
};

const reportCards = [
  { title: "PROFESSIONAL ANNOYER", status: "ACTIVE" },
  { title: "RANDOM ADVICE DEPARTMENT", status: "24x7" },
  { title: "EMERGENCY SUPPORT", status: "ALWAYS AVAILABLE" },
  { title: "UNNECESSARY FIGHTS", status: "FREQUENT 😂" },
  { title: "SISTER LICENSE", status: "LIFETIME" }
];

const timelineItems = [
  {
    label: "THE BEGINNING",
    text: "Where it all started."
  },
  {
    label: "THE RANDOM DAYS",
    text: "Too many conversations. 😂"
  },
  {
    label: "THE CHAOS",
    text: "Questionable decisions were made."
  },
  {
    label: "THE MEMORIES",
    text: "Some moments are worth keeping."
  }
];

export function KomalPageExperience({ memories }: KomalPageExperienceProps) {
  const [fileOpen, setFileOpen] = useState(false);

  const heroPhoto = useMemo(() => memories.find((photo) => photo.featured) || memories[0], [memories]);
  const letterPhoto = useMemo(() => memories.find((photo) => photo.letter) || memories[1] || memories[0], [memories]);
  const finalPhoto = useMemo(() => memories.find((photo) => photo.final) || memories[memories.length - 1], [memories]);

  useEffect(() => {
    document.body.classList.add("komal-page-active");

    const themeToggle = document.querySelector(".comic-toggle");
    const themeToggleShell = themeToggle?.closest(".fixed") as HTMLElement | null;
    const previousDisplay = themeToggleShell?.style.display || "";

    if (themeToggleShell) {
      themeToggleShell.style.display = "none";
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(`.${styles.reveal}`));

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add(styles.visible));
      return () => {
        document.body.classList.remove("komal-page-active");
        if (themeToggleShell) {
          themeToggleShell.style.display = previousDisplay;
        }
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      document.body.classList.remove("komal-page-active");
      if (themeToggleShell) {
        themeToggleShell.style.display = previousDisplay;
      }
    };
  }, []);

  const openFile = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setFileOpen(true);

    window.setTimeout(
      () => document.getElementById("komal-hero")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }),
      reducedMotion ? 0 : 420
    );
  };

  const scrollToStory = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("komal-story")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <main className={styles.page}>
      <section className={`${styles.secretFile} ${fileOpen ? styles.fileOpened : ""}`} aria-label="Classified file opening">
        <div className={styles.fileCard}>
          <div className={styles.lockBadge}>
            <FiLock />
            CLASSIFIED FILE
          </div>
          <p className={styles.fileNo}>RAKHI-2026</p>
          <div className={styles.fileRows}>
            <div>
              <span>SUBJECT:</span>
              <strong>KOMAL YADAV</strong>
            </div>
            <div>
              <span>STATUS:</span>
              <strong>PERMANENTLY APPROVED ❤️</strong>
            </div>
          </div>
          <p className={styles.fileMessage}>A confidential message has been prepared for you.</p>
          <button type="button" onClick={openFile} className={styles.primaryButton}>
            OPEN FILE →
          </button>
        </div>
      </section>

      <div className={`${styles.unlockedStory} ${fileOpen ? styles.unlockedStoryVisible : ""}`}>
        <section id="komal-hero" className={`${styles.hero} ${styles.reveal}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>OFFICIAL SIBLING DEPARTMENT™</p>
            <h1>Hey Komal ❤️</h1>
            <p className={styles.heroLead}>
              You scanned the QR.
              <br />
              So I guess there's no going back now. 😌
            </p>
            <p className={styles.heroText}>
              This is a tiny collection of memories, random moments, unnecessary nonsense and one very important reminder...
            </p>
            <div className={styles.heroActions}>
              <button type="button" onClick={scrollToStory} className={styles.primaryButton}>
                Explore Our Story ↓
              </button>
            </div>
          </div>
          <figure className={styles.heroPhotoWrap}>
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              width={1200}
              height={760}
              priority
              sizes="(max-width: 900px) 92vw, 44vw"
              className={styles.heroPhoto}
            />
            <figcaption>Evidence #001 - We actually had fun. 😂</figcaption>
          </figure>
        </section>

        <section id="komal-story" className={`${styles.section} ${styles.storySection} ${styles.reveal}`}>
          <div className={styles.sectionCopy}>
            <p className={styles.eyebrow}>HOW THIS BOND STARTED</p>
            <h2>We Didn't Start as Siblings.</h2>
            <div className={styles.storyText}>
              <p>We weren't born as siblings.</p>
              <p>We didn't grow up in the same house.</p>
              <p>We didn't even know each other before college.</p>
              <p>We simply met.</p>
              <p>
                And somewhere between college days, random conversations, stupid arguments, laughing at nonsense and
                making memories...
              </p>
              <p>you became my sister.</p>
              <p>Funny how some of the best relationships in life aren't planned.</p>
              <p>They just happen.</p>
            </div>
          </div>
          <figure className={styles.heroPhotoWrap}>
            <Image
              src={memories[2].src}
              alt={memories[2].alt}
              width={900}
              height={680}
              sizes="(max-width: 900px) 92vw, 39vw"
              className={styles.letterPhoto}
            />
            <figcaption>The beginning of everything 💭</figcaption>
          </figure>
        </section>

        <AdaptiveGallery memories={memories} />

        <section className={`${styles.section} ${styles.reportSection} ${styles.reveal}`}>
          <div className={styles.reportHeader}>
            <p className={styles.eyebrow}>Department of Unnecessary Fights & Lifetime Support</p>
            <h2>OFFICIAL SISTER REPORT™</h2>
          </div>
          <div className={styles.caseGrid}>
            <div>
              <span>FILE NO.</span>
              <strong>RAKHI/2026/08/28</strong>
            </div>
            <div>
              <span>SUBJECT</span>
              <strong>KOMAL YADAV</strong>
            </div>
            <div>
              <span>CASE</span>
              <strong>The Most Annoying Yet Irreplaceable Sister</strong>
            </div>
            <div>
              <span>STATUS</span>
              <strong>PERMANENTLY APPROVED ❤️</strong>
            </div>
          </div>
          <div className={styles.reportCards}>
            {reportCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>Status: {card.status}</p>
              </article>
            ))}
          </div>
          <div className={styles.terms}>
            <strong>TERMS & CONDITIONS</strong>
            <p>This relationship cannot be cancelled, returned, exchanged or transferred.</p>
            <p>Once a sister, always a sister.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.letterSection} ${styles.reveal}`}>
          <figure className={styles.letterPhotoWrap}>
            <Image
              src={letterPhoto.src}
              alt={letterPhoto.alt}
              width={900}
              height={680}
              sizes="(max-width: 900px) 92vw, 39vw"
              className={styles.letterPhoto}
            />
          </figure>
          <article className={styles.letterCard}>
            <p className={styles.eyebrow}>THE PART I MEAN</p>
            <h2>Things I Probably Don't Say Enough ❤️</h2>
            <p>Life has a funny way of giving us people we never expected to become important.</p>
            <p>You were someone I met in college, but somewhere along the way, you became much more than just a college friend.</p>
            <p>We've had our share of jokes, arguments, nonsense and unforgettable moments.</p>
            <p>But behind all of that, I genuinely want you to know that I'm grateful for this bond.</p>
            <p>
              I may not always say it, and I may spend more time irritating you than appreciating you 😂, but I'll always
              wish the best for you.
            </p>
            <p>Wherever life takes you, I hope you keep smiling, keep growing and keep being yourself.</p>
            <p>And yes...</p>
            <strong>you're stuck with your brother permanently. ❤️</strong>
          </article>
        </section>

        <section className={`${styles.section} ${styles.timelineSection} ${styles.reveal}`}>
          <div className={styles.centerCopy}>
            <p className={styles.eyebrow}>NO FAKE DATES, JUST THE FILE</p>
            <h2>Our Little Timeline</h2>
          </div>
          <div className={styles.timeline}>
            {memories.map((photo, index) => (
              <article key={`${photo.src}-timeline`} className={styles.timelineItem}>
                <div className={styles.timelineImage}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={180}
                    height={180}
                    sizes="84px"
                    className={`${styles.timelinePhoto} ${photo.fit === "contain" ? styles.containPhoto : ""}`}
                  />
                </div>
                <div>
                  <h3>{timelineItems[index]?.label || photo.title}</h3>
                  <p>{timelineItems[index]?.text || photo.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.wishSection} ${styles.reveal}`}>
          <div className={styles.floatingBits} aria-hidden="true">
            <span>♡</span>
            <span>✦</span>
            <span>❀</span>
            <span>♡</span>
            <span>✧</span>
          </div>
          <p className={styles.eyebrow}>RAKSHA BANDHAN WISH</p>
          <h2>Happy Raksha Bandhan, Komal ❤️</h2>
          <p>Some relationships are given to us.</p>
          <p>Some are found.</p>
          <p>Ours is one of the ones I'm genuinely grateful to have found.</p>
          <p>Happy Raksha Bandhan to my officially unofficial sister. 🫶</p>
        </section>

        <FinalReveal photo={finalPhoto} />

        <footer className={styles.signature}>
          <p className={styles.approved}>OFFICIALLY APPROVED ❤️</p>
          <p>Authorized By:</p>
          <strong>SHUBHAM MAURYA</strong>
          <span />
          <p>Made with memories, madness & a little brotherly love. ❤️</p>
        </footer>
      </div>
    </main>
  );
}
