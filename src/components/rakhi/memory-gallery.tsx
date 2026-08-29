"use client";

import Image from "next/image";
import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { Lightbox } from "./lightbox";
import type { MemoryPhoto } from "./types";
import styles from "./rakhi.module.css";

type MemoryGalleryProps = {
  memories: MemoryPhoto[];
};

export function MemoryGallery({ memories }: MemoryGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className={`${styles.section} ${styles.gallerySection} ${styles.reveal}`}>
      <div className={styles.centerCopy}>
        <p className={styles.eyebrow}>MEMORY GALLERY</p>
        <h2>Evidence That We Actually Have Good Memories 📸</h2>
        <p>A few moments from the chaos.</p>
      </div>

      <div className={styles.gallery}>
        {memories.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={`${styles.galleryCard} ${styles[`gallerySpan${index % 4}`]}`}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open memory: ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={900}
              height={1100}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 30vw"
              className={photo.fit === "contain" ? styles.galleryImageContain : styles.galleryImage}
            />
            <span>
              <FiCamera />
              {photo.title}
            </span>
          </button>
        ))}
      </div>

      {selectedIndex !== null ? (
        <Lightbox
          photos={memories}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      ) : null}
    </section>
  );
}
