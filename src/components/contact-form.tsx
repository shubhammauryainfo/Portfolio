"use client";

import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import { FiLoader, FiMessageSquare, FiSend } from "react-icons/fi";

type ContactFormProps = {
  subject: string;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function ContactForm({ subject }: ContactFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while sending your message.");
      }

      setStatus("success");
      setForm(initialState);

      window.setTimeout(() => {
        startTransition(() => {
          router.push("/thankyou");
        });
      }, 1200);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong while sending your message."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="comic-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="comic-input"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject *"
        required
        value={form.subject}
        onChange={(event) => updateField("subject", event.target.value)}
        className="comic-input"
      />
      <textarea
        name="message"
        placeholder="Your message *"
        rows={6}
        required
        value={form.message}
        onChange={(event) => updateField("message", event.target.value)}
        className="comic-input"
      />
      <input type="hidden" name="_subject" value={subject} />

      {status === "success" ? (
        <div className="glass-card flex flex-col gap-2 p-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center border-4 border-[color:var(--accent-border)] bg-[color:var(--accent-main)] text-[color:var(--accent-ink)] shadow-[5px_5px_0_var(--shadow-accent)]">
              <FiSend />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[color:var(--text-main)]">
                Message Sent
              </p>
              <p className="text-sm text-[color:var(--text-soft)]">
                Your message goes straight to Shubham&apos;s inbox and we get back to you soon.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="border-4 border-[color:var(--accent-pop)] bg-[color:var(--card-alt)] px-4 py-3 text-sm font-bold text-[color:var(--text-main)] shadow-[6px_6px_0_var(--shadow-accent)]">
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="comic-button justify-center disabled:cursor-not-allowed disabled:opacity-80"
      >
        {status === "loading" ? <FiLoader className="animate-spin" /> : <FiMessageSquare />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
