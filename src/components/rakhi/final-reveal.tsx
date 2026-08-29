"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";
import { FiGift, FiHeart } from "react-icons/fi";
import type { MemoryPhoto } from "./types";
import styles from "./rakhi.module.css";

type FinalRevealProps = {
  photo: MemoryPhoto;
};

const confettiPieces = Array.from({ length: 18 }, (_, index) => index);

export function FinalReveal({ photo }: FinalRevealProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className={`${styles.section} ${styles.finalSection} ${styles.reveal}`}>
      <div className={styles.finalCard}>
        <p className={styles.eyebrow}>FINAL SURPRISE</p>
        <h2>One Last Thing... 👀</h2>
        <p className={styles.finalBefore}>There's one message left. And yes, this one is serious. Probably.</p>
        <button type="button" onClick={() => setOpen(true)} className={styles.primaryButton} aria-expanded={open}>
          OPEN THIS
          <FiGift />
        </button>

        {open ? (
          <div className={styles.finalMessage}>
            <div className={styles.confetti} aria-hidden="true">
              {confettiPieces.map((piece) => (
                <span key={piece} style={{ "--piece": piece } as CSSProperties} />
              ))}
            </div>
            <FiHeart className={styles.finalHeart} />
            <p>No matter how much we grow up,</p>
            <p>how busy life gets,</p>
            <p>or how far life takes us...</p>
            <strong>you'll always have a brother cheering for you. ❤️</strong>
            <span className={styles.yourBrother}>- SHUBHAM MAURYA</span>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={900}
              height={1100}
              sizes="(max-width: 640px) 84vw, 430px"
              className={styles.finalPhoto}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
