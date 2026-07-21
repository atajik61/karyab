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
    <main>
      <section className="px-6 py-20 text-center">
        <h1>KaarYab Afghnistan</h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          Discover jobs, scholarships, internships, and learning opportunities.
        </p>

        <Link
          href="/opportunities"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Explore Opportunities
        </Link>
      </section>
      <section className="px-6 py-16 border-t">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">
            {" "}
            Explore Categories
          </h2>
          <p className="mx-auto mt-6 max-w-2xl  text-center text-gray-600">
            Find opportunities that match your goals
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                href={`/opportunities?category=${category}`}
                className="rounded-xl border p-6 text-center transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*Featured Opportunities*/}
      <section className="px-6 py-10 text-center">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold">
            {" "}
            Featured Opportunities
          </h2>
          <p className="mx-auto mt-6 max-w-2xl  text-center text-gray-600">
            Discover the latest opportunities
          </p>
        </div>
        <div className="mt-10 grid gap-6  md:grid-cols-3">
          {featuredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </section>
    </main>
  );
}
