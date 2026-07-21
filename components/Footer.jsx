import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">KaarYab Afghanistan</h2>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <div className="mt-4 flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/opportunities">Opportunities</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>

            <div className="mt-4 flex flex-col gap-2">
              <Link href="/saved">Saved</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2026 KaarYab Afghanistan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
