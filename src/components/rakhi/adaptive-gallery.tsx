"use client";

import Image from "next/image";
import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { Lightbox } from "./lightbox";
import type { MemoryPhoto } from "./types";
import styles from "./rakhi.module.css";

type AdaptiveGalleryProps = {
  memories: MemoryPhoto[];
};

export function AdaptiveGallery({ memories }: AdaptiveGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className={`${styles.section} ${styles.gallerySection} ${styles.reveal}`}>
      <div className={styles.centerCopy}>
        <p className={styles.eyebrow}>MEMORY GALLERY</p>
        <h2>Evidence That We Actually Have Good Memories 📸</h2>
        <p>A few moments from the chaos.</p>
      </div>

      <div className={styles.adaptiveGallery}>
        {memories.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={styles.adaptiveGalleryCard}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open memory: ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={900}
              height={1100}
              loading={index < 3 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
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
