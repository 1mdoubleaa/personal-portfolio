"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setState("submitting");

    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(form)),
    });

    setState(res.ok ? "success" : "error");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Name"
        required
        className="w-full rounded border px-3 py-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full rounded border px-3 py-2"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={5}
        className="w-full resize-none rounded border px-3 py-2"
      />
      <button
        type="submit"
        disabled={state === "submitting"}
        className="rounded bg-primary px-4 py-2 font-semibold text-white"
      >
        {state === "submitting" ? "Sending…" : "Send"}
      </button>

      {state === "success" && (
        <p className="text-sm text-green-600">Thanks! I’ll reply soon.</p>
      )}
      {state === "error" && (
        <p className="text-sm text-red-600">
          Oops, something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
