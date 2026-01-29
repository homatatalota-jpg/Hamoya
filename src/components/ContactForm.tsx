"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/Button";
import { serviceCategories } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("General");
  const [message, setMessage] = useState("");

  const serviceOptions = useMemo(() => {
    return [
      "General",
      ...serviceCategories.flatMap((c) => [
        c.title,
        ...c.services.map((s) => `${c.title} — ${s.title}`),
      ]),
    ];
  }, []);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const subject = `Website Inquiry — ${service}`;
        const body =
          `Name: ${name}\n` +
          `Company: ${company}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Service: ${service}\n\n` +
          `${message}`;

        const url = `mailto:${encodeURIComponent(siteConfig.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className="h-11 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)]"
          required
        />
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="h-11 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)]"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          className="h-11 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)]"
          required
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="h-11 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)]"
        />
      </div>

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="h-11 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 text-sm text-[var(--text)]"
      >
        {serviceOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us about your project"
        rows={6}
        className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)]"
        required
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[var(--muted)]">
          Submitting will open your email client.
        </div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}
