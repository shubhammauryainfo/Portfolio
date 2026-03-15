import Link from "next/link";
import type { Metadata } from "next";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Thank You | Shubham Maurya",
  description: "Thank you page for portfolio contact form submissions."
};

export default function ThankYouPage() {
  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-16">
      <section className="glass-card max-w-2xl space-y-6 p-8 text-center sm:p-12">
        <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient text-4xl text-slate-950">
          <FiCheckCircle />
        </div>
        <div className="space-y-3">
          <p className="section-kicker">Message Sent</p>
          <h1 className="section-title">Thank You</h1>
          <p className="soft-text">
            Your message has been sent successfully. I&apos;ll get back to you as soon as I can.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-white/10"
        >
          <FiArrowLeft />
          Back to home
        </Link>
      </section>
    </main>
  );
}
