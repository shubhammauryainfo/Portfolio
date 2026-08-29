import type { Metadata } from "next";
import { KomalPageExperience } from "@/components/rakhi/komal-page";
import type { MemoryPhoto } from "@/components/rakhi/types";

export const metadata: Metadata = {
  title: "For Komal ❤️ | Happy Raksha Bandhan",
  description: "A little collection of memories, madness and wishes for Komal. ❤️",
  openGraph: {
    title: "For Komal ❤️ | Happy Raksha Bandhan",
    description: "A little collection of memories, madness and wishes for Komal. ❤️",
    type: "website"
  }
};

const memories: MemoryPhoto[] = [
  {
    src: "/komal/1.jpg",
    title: "The Group Chaos",
    description: "One of those college memories where everyone somehow became part of the evidence.",
    alt: "College group photo with Komal Yadav and friends during a festive day",
    fit: "contain"
  },
  {
    src: "/komal/2.jpeg",
    title: "Selfie Evidence",
    description: "Proof that the chaos occasionally looked cute enough to save.",
    alt: "Wide college selfie with Komal Yadav and friends smiling",
    featured: true
  },
  {
    src: "/komal/3.jpg",
    title: "Festive Squad File",
    description: "A proper memory from the days that quietly became special.",
    alt: "Festive group photo with Komal Yadav and friends",
    letter: true
  },
  {
    src: "/komal/4.jpg",
    title: "Questionable Decisions",
    description: "Some moments explain the friendship better than serious words ever could.",
    alt: "Playful festive photo with Komal Yadav and her brother figure",
    final: true
  },
  {
    src: "/komal/5.jpeg",
    title: "Coffee Chronicles",
    description: "Those random coffee dates that turned into endless conversations.",
    alt: "Casual coffee shop moment with Komal Yadav and friends"
  },
  {
    src: "/komal/6.jpeg",
    title: "Candid Laughter",
    description: "The kind of laugh that makes memories unforgettable.",
    alt: "Candid moment capturing genuine joy with Komal Yadav"
  },
  {
    src: "/komal/7.jpeg",
    title: "Squad Goals",
    description: "When everyone's in the frame and nothing else matters.",
    alt: "Complete group photo with Komal Yadav and the whole squad"
  },
  {
    src: "/komal/8.jpg",
    title: "Dressed Up Chaos",
    description: "We tried to be fancy. We tried.",
    alt: "Formal event photo with Komal Yadav looking fancy"
  },
  {
    src: "/komal/9.jpg",
    title: "Simple Moments",
    description: "Sometimes the best memories are the simplest ones.",
    alt: "Quiet moment with Komal Yadav just being herself"
  },
  {
    src: "/komal/10.jpg",
    title: "Sunset Vibes",
    description: "Golden hour made everything look like a movie.",
    alt: "Golden hour photo with Komal Yadav with beautiful lighting"
  },
  {
    src: "/komal/11.jpg",
    title: "The Realest One",
    description: "No filters, no posing. Just us being us.",
    alt: "Unfiltered genuine moment with Komal Yadav and friends"
  }
];

export default function KomalPage() {
  return <KomalPageExperience memories={memories} />;
}
