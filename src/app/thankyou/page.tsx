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
        <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-[color:var(--ink-strong)] bg-[color:var(--accent-main)] text-4xl text-[color:var(--ink-strong)] shadow-[4px_4px_0_var(--shadow-accent)]">
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
          className="comic-button-outline"
        >
          <FiArrowLeft />
          Back to home
        </Link>
      </section>
    </main>
  );
}
