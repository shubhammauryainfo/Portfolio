export type MemoryPhoto = {
  src: string;
  title: string;
  description: string;
  alt: string;
  featured?: boolean;
  letter?: boolean;
  final?: boolean;
  fit?: "cover" | "contain";
};
