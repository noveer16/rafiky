export default function PressPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-6 text-4xl font-bold">Press & Media</h1>
      <p className="mb-6 text-gray-700">
        Welcome to the Rafiky Media Kit. Download our assets and learn more about our vision for
        Egyptian tourism.
      </p>

      <ul className="ml-6 list-disc space-y-2 text-gray-700">
        <li>Company Logos (PNG, SVG)</li>
        <li>Fact Sheet (PDF)</li>
        <li>Press Releases</li>
        <li>Founder Bios</li>
      </ul>

      <p className="mt-8">
        For interviews or media requests, contact us at{' '}
        <a href="mailto:media@rafiky.com" className="text-blue-600">
          media@rafiky.com
        </a>
      </p>
    </main>
  )
}
