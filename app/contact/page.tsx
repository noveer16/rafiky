export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        We’d love to hear from you! Whether you’re a traveler, provider, or partner, feel free to
        reach out.
      </p>

      <div className="space-y-4">
        <p>
          <strong>Email:</strong> support@rafiky.com
        </p>
        <p>
          <strong>Response Time:</strong> Within 24–48 hours
        </p>
      </div>

      <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-10 space-y-4">
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="w-full rounded-lg border p-3"
        />
        <textarea
          name="message"
          required
          placeholder="Your message"
          className="w-full rounded-lg border p-3"
          rows={5}
        ></textarea>
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </main>
  )
}
