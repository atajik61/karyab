import { opportunities } from "@/data/opportunities";
import Link from "next/link";
import OpportunityCard from "@/components/OpportunityCard";

const categories = [
  "Job",
  "Internship",
  "Scholarship",
  "Online Course",
  "Remote Work",
  "Training",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold md:text-5xl">
            KaarYab Afghanistan
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-gray-300">
            Discover jobs, scholarships, internships, and learning
            opportunities.
          </p>

          <Link
            href="/opportunities"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="border-t border-gray-200 px-6 py-16 dark:border-gray-700">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">Explore Categories</h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600 dark:text-gray-300">
            Find opportunities that match your goals.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/opportunities?category=${category}`}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">
            Featured Opportunities
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600 dark:text-gray-300">
            Discover the latest opportunities.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {opportunities.slice(0, 3).map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
