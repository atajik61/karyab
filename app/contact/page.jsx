"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Have a question, suggestion, or feedback? We would love to hear from
            you.
          </p>
        </section>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold">Get in Touch</h2>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
              If you have any questions about KaarYab Afghanistan or want to
              share an opportunity, feel free to contact us.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-xl border bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold">Email</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  contact@kaaryab.com
                </p>
              </div>

              <div className="rounded-xl border bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <h3 className="font-semibold">Location</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Afghanistan
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="text-2xl font-bold">Send a Message</h2>

            {submitted && (
              <p
                role="status"
                className="mt-5 rounded-lg bg-green-100 px-4 py-3 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              >
                Your message has been submitted successfully!
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block font-medium">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Write your message"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
