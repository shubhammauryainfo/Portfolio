"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import type { MemoryPhoto } from "./types";
import styles from "./rakhi.module.css";

type LightboxProps = {
  photos: MemoryPhoto[];
  selectedIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export function Lightbox({ photos, selectedIndex, onChange, onClose }: LightboxProps) {
  const photo = photos[selectedIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onChange((selectedIndex + 1) % photos.length);
      }

      if (event.key === "ArrowLeft") {
        onChange((selectedIndex - 1 + photos.length) % photos.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onChange, onClose, photos.length, selectedIndex]);

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Memory photo viewer"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close photo viewer">
        <FiX />
      </button>

      <button
        type="button"
        className={`${styles.lightboxButton} ${styles.lightboxPrevious}`}
        onClick={() => onChange((selectedIndex - 1 + photos.length) % photos.length)}
        aria-label="Previous photo"
      >
        <FiChevronLeft />
      </button>

      <figure className={styles.lightboxFigure}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={1400}
          height={1600}
          sizes="96vw"
          className={styles.lightboxImage}
          priority
        />
        <figcaption>
          <strong>{photo.title}</strong>
          <span>{photo.description}</span>
        </figcaption>
      </figure>

      <button
        type="button"
        className={`${styles.lightboxButton} ${styles.lightboxNext}`}
        onClick={() => onChange((selectedIndex + 1) % photos.length)}
        aria-label="Next photo"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}
