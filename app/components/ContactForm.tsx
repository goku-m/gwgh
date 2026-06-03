"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "block w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-lime-600 focus:ring-lime-600";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "Partnership enquiry");
    const message = String(form.get("message") ?? "");
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    setStatus(
      "Your email app should open with your message prepared. Please send it there to complete your enquiry."
    );
    window.location.href = `mailto:info@greenworldgh.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl bg-white p-6 shadow-lg lg:col-span-3 lg:p-8"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={inputClass}
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={inputClass}
          placeholder="name@email.com"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={inputClass}
          placeholder="How would you like to work with us?"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className={inputClass}
          placeholder="Tell us a little more..."
          required
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-lime-700 px-6 py-3 text-sm font-semibold text-white hover:bg-lime-800 focus:ring-4 focus:ring-lime-300"
      >
        Prepare email
      </button>
      {status && (
        <p
          className="rounded-lg border border-lime-200 bg-lime-50 p-4 text-sm leading-6 text-lime-900"
          role="status"
        >
          {status} If nothing opens, email{" "}
          <a className="font-semibold underline" href="mailto:info@greenworldgh.com">
            info@greenworldgh.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
